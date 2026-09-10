export type FaqItem = { q: string; r: string };

type Props = {
  /** Titre du bloc (H2), propre à la page. */
  titre: string;
  /** Questions/réponses affichées ET exposées en données structurées FAQPage. */
  items: FaqItem[];
  /** Ancre de la section, à changer si la page contient plusieurs FAQ. */
  id?: string;
};

/**
 * FAQ réutilisable des pages de section : même rendu et mêmes classes que la
 * FAQ de l'accueil (FaqHome), avec un JSON-LD FAQPage propre à chaque page.
 */
export default function FaqSection({ titre, items, id = 'faq' }: Props) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.r },
    })),
  };

  return (
    <section className="sc-sec" id={id}>
      <div className="sc-wrap">
        <div data-reveal>
          <p className="sc-eyebrow">Questions fréquentes</p>
          <h2 className="sc-title">{titre}</h2>
        </div>
        <div className="sc-faq" data-reveal>
          {items.map((item) => (
            <details key={item.q} className="sc-panel sc-faq-item">
              <summary>{item.q}</summary>
              <p>{item.r}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
