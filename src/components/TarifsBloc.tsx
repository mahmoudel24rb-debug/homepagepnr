import { HELLOASSO_ADHESION, TARIFS, type Tarif } from '@/lib/tarifs';
import { CLUB, REJOINDRE_TUNNEL_URL } from '@/lib/infos';

/**
 * Bloc de tarifs réutilisable : affiche les formules d'adhésion filtrées par
 * section (et, si besoin, par nom), en cartes de verre statiques.
 *
 * Émet aussi les nœuds Offer de schema.org pour les tarifs affichés, rattachés
 * au SportsClub du layout via son @id. Comme les canoniques, ces données
 * structurées ne sont produites qu'en prod : la démo GitHub Pages est noindex.
 */
const IS_DEMO = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/homepagepnr') !== '/';

type Props = {
  /** Sections dont les tarifs sont affichés, dans l'ordre de TARIFS. */
  sections: Tarif['section'][];
  /** Titre du bloc (H2). */
  titre?: string;
  /** Ancre de la section : sert aux CTA « Voir les tarifs ». */
  id?: string;
  /** Filtre supplémentaire par nom de formule (sous-ensemble d'une section). */
  noms?: string[];
};

export default function TarifsBloc({
  sections,
  titre = 'Tarifs de la saison',
  id = 'tarifs',
  noms,
}: Props) {
  const tarifs = TARIFS.filter(
    (t) => sections.includes(t.section) && (!noms || noms.includes(t.nom)),
  );

  const offresJsonLd = {
    '@context': 'https://schema.org',
    '@graph': tarifs.map((t) => ({
      '@type': 'Offer',
      name: t.nom,
      price: t.prix,
      priceCurrency: 'EUR',
      category: 'Adhésion saison 2026/2027',
      url: HELLOASSO_ADHESION,
      availability: 'https://schema.org/InStock',
      offeredBy: { '@id': `${CLUB.siteUrl}/#organization` },
      description: t.qui,
    })),
  };

  return (
    <section className="sc-sec" id={id}>
      <div className="sc-wrap">
        <div data-reveal>
          <p className="sc-eyebrow">Adhésion 2026/2027</p>
          <h2 className="sc-title">{titre}</h2>
          <p className="sc-lead">
            Semaine découverte offerte : la première semaine d’entraînement est une séance d’essai
            gratuite, sans licence ni engagement.
          </p>
        </div>

        <div className="sc-cards" data-reveal>
          {tarifs.map((t) => (
            <article key={t.nom} className="sc-card sc-card--statique">
              <h3 className="sc-card-title">{t.nom}</h3>
              <div className="sc-chips">
                <span className="sc-chip">{t.tag}</span>
              </div>
              <p
                style={{
                  fontFamily: "'Futura Condensed', 'Arial Narrow', sans-serif",
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.03em',
                  color: 'var(--rf-amber)',
                  fontSize: 'clamp(34px, 3.6vw, 50px)',
                  lineHeight: 1.05,
                  margin: '16px 0 0',
                }}
              >
                {t.prixAffiche}
                <span
                  style={{
                    fontFamily: "'Neuething', sans-serif",
                    fontWeight: 400,
                    textTransform: 'none',
                    letterSpacing: '-0.02em',
                    color: 'var(--sc-cream-55)',
                    fontSize: 'clamp(14px, 1.2vw, 16px)',
                    marginLeft: 8,
                  }}
                >
                  {t.periode}
                </span>
              </p>
              {t.paiement3x ? (
                <p className="sc-legal-text" style={{ margin: '6px 0 0' }}>
                  ou {t.paiement3x}
                </p>
              ) : null}
              <p className="sc-card-desc" style={{ marginTop: 14 }}>
                {t.qui}
              </p>
              <ul className="sc-liste">
                {t.inclus.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <div className="sc-ctas">
                <a
                  className="sc-btn"
                  href={HELLOASSO_ADHESION}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  S’inscrire
                </a>
                <a className="sc-btn-ghost" href={REJOINDRE_TUNNEL_URL}>
                  Essai gratuit d’abord
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {IS_DEMO ? null : (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(offresJsonLd) }}
        />
      )}
    </section>
  );
}
