import { asset } from '@/lib/asset';

/**
 * Marqueur de yards (séparateur de sections) : descente du milieu de
 * terrain vers l'en-but, 50 → 40 → 30 → 20 → 10 → PIONNIERS.
 */
export type YardKey = '10' | '20' | '30' | '40' | '50' | 'endzone';

/**
 * Dimensions intrinsèques des SVG (attribut viewBox des fichiers) : l'en-but
 * est un poil plus haut que les lignes de yards. Posées en width/height sur
 * l'image pour réserver le ratio avant le chargement ; l'affichage reste
 * piloté par le CSS (.sc-yard img { width: 100%; height: auto }).
 */
const YARD_SIZE = { width: 714, height: 131 } as const;
const ENDZONE_SIZE = { width: 713, height: 147 } as const;

export default function YardLine({ n }: { n: YardKey }) {
  const isEndzone = n === 'endzone';
  const file = isEndzone ? 'endzone' : `${n}y`;
  const { width, height } = isEndzone ? ENDZONE_SIZE : YARD_SIZE;
  return (
    <div className="sc-yard" aria-hidden="true">
      <img
        src={asset(`/assets/refonte/yards/${file}.svg`)}
        alt=""
        width={width}
        height={height}
        // Ni lazy (la premiere ligne suit le hero) ni prechargee : priorite basse.
        fetchPriority="low"
      />
    </div>
  );
}
