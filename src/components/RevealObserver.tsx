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
                io?.unobserve(e.target);
              }
            }
          },
          { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
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
