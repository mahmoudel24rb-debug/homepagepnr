'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Îlot client : révèle au scroll les éléments marqués [data-reveal]
 * (fade + translation, désactivé si prefers-reduced-motion via CSS).
 *
 * Monté dans le layout racine, qui ne se remonte PAS lors des navigations
 * next/link : l'effet dépend donc du pathname pour re-scanner les éléments
 * de chaque nouvelle page (sinon ils resteraient à opacité 0). Le double
 * requestAnimationFrame laisse le DOM de la page arrivante se peindre
 * avant l'observation.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let io: IntersectionObserver | null = null;
    let raf = 0;
    raf = requestAnimationFrame(() => {
      raf = requestAnimationFrame(() => {
        const els = Array.from(document.querySelectorAll('[data-reveal]:not(.sc-in)'));
        if (!els.length) return;
        io = new IntersectionObserver(
          (entries) => {
            for (const e of entries) {
              if (e.isIntersecting) {
                e.target.classList.add('sc-in');
                // will-change: auto une fois révélé (comme le site recrutement) :
                // garder le calque composité coûte en mémoire et fait sortir des
                // captures pleine page vides hors viewport.
                (e.target as HTMLElement).style.willChange = 'auto';
                io?.unobserve(e.target);
              }
            }
          },
          // threshold 0 (et non 0.12) : un grand bloc en toute fin de page
          // (endzone devant le footer) n'atteint jamais 12 % de visibilité
          // et resterait invisible ; 1 pixel au-dessus de la marge suffit.
          { threshold: 0, rootMargin: '0px 0px -6% 0px' },
        );
        els.forEach((el) => io?.observe(el));
      });
    });
    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
