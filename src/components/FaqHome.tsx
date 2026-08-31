import YardLine from './YardLine';

/** Questions/réponses affichées ET exposées en données structurées FAQPage. */
const FAQ = [
  {
    q: 'Où pratiquer le football américain à Tours ?',
    r: "Les Pionniers de Touraine sont le club de football américain et de flag football de Tours. Les entraînements ont lieu au stade de la Chambrerie, rue Tartifume, 37100 Tours (Tours Nord), accessible en bus (lignes 2 et 12) et par l'A10, sortie n°19.",
  },
  {
    q: "Faut-il de l'expérience pour rejoindre le club ?",
    r: "Non. Le club accueille les débutants comme les joueurs expérimentés, en football américain comme en flag football. Une semaine découverte offerte permet d'essayer avant de s'engager, sans aucun prérequis.",
  },
  {
    q: 'Quels sont les horaires des entraînements ?',
    r: "Seniors football américain (compétition) : lundi et vendredi de 20h00 à 23h00, mercredi de 21h00 à 23h00. Flag mixte seniors : lundi et jeudi de 20h15 à 22h45. Juniors foot US : lundi et jeudi de 19h00 à 21h00. Flag mixte juniors : jeudi de 19h00 à 20h30. École de flag : samedi de 10h00 à 12h00.",
  },
  {
    q: 'Quelle est la différence entre football américain et flag football ?',
    r: "Le football américain se joue au contact, avec casque et épaulières. Le flag football est la version sans contact : au lieu de plaquer, on arrache un ruban (le flag) porté à la ceinture. Le flag se joue en mixte, à 5 contre 5, et devient sport olympique aux JO de Los Angeles 2028.",
  },
  {
    q: 'À partir de quel âge peut-on jouer ?',
    r: "Le club accueille les jeunes à l'école de flag (le samedi matin) puis en catégorie juniors U18 (football américain et flag), et les adultes dans les équipes seniors. Chaque catégorie bénéficie d'un encadrement adapté.",
  },
  {
    q: "Comment s'inscrire aux Pionniers de Touraine ?",
    r: "Le parcours « Nous rejoindre » en ligne permet de trouver sa place en deux minutes : jouer, s'investir dans le club ou soutenir le projet. La licence FFFA est incluse dans toutes les formules d'adhésion.",
  },
];

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.r },
  })),
};

export default function FaqHome() {
  return (
    <section className="sc-sec" id="faq">
      <div className="sc-wrap">
        <div data-reveal>
          <p className="sc-eyebrow">Questions fréquentes</p>
          <h2 className="sc-title">Avant d’entrer sur le terrain.</h2>
        </div>
        <div className="sc-faq" data-reveal>
          {FAQ.map((item) => (
            <details key={item.q} className="sc-panel sc-faq-item">
              <summary>{item.q}</summary>
              <p>{item.r}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
    </section>
  );
}
