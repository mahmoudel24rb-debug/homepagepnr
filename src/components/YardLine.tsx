/**
 * Marqueur de yards (séparateur de sections) : la page descend le terrain,
 * 10 → 50, jusqu'à l'en-but (CTA final). Même signature que la landing.
 */
export default function YardLine({ n }: { n: string }) {
  return (
    <div className="sc-yard" aria-hidden="true">
      <span className="sc-yard-hash" />
      <span className="sc-yard-num">{n}</span>
      <span className="sc-yard-hash" />
    </div>
  );
}
