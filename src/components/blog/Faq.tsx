import React, { isValidElement, type ReactNode } from 'react';

/**
 * Section « Questions fréquentes » d'un article : rend le H2 (id="faq"), un H3
 * ancré par question et la réponse, ET expose les mêmes paires en données
 * structurées FAQPage (JSON-LD). Une seule source pour l'affichage et le
 * balisage : la réponse peut contenir des liens ou du gras, le texte brut est
 * extrait automatiquement pour le JSON-LD.
 *
 * Usage dans src/content/<slug>.tsx :
 *   <Faq titre="Questions fréquentes sur ..." items={[{ q: '...', r: <>...</> }]} />
 */
export type FaqItem = {
  /** Question, en texte brut (sert de H3 et de Question.name). */
  q: string;
  /** Réponse : texte ou JSX (liens, gras). */
  r: ReactNode;
};

/** Identifiant d'ancre stable dérivé de la question (accents retirés). */
export function faqId(q: string): string {
  return (
    'faq-' +
    q
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60)
  );
}

/** Texte brut d'un arbre React (strings concaténées, sans balises). */
export function textOf(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');
  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode };
    return textOf(props.children);
  }
  return '';
}

export default function Faq({ titre, items, id = 'faq' }: { titre: string; items: FaqItem[]; id?: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: textOf(it.r).replace(/\s+/g, ' ').trim() },
    })),
  };
  return (
    <>
      <h2 id={id}>{titre}</h2>
      {items.map((it) => (
        <React.Fragment key={it.q}>
          <h3 id={faqId(it.q)}>{it.q}</h3>
          {typeof it.r === 'string' ? <p>{it.r}</p> : it.r}
        </React.Fragment>
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
