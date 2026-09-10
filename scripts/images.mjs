/**
 * Dérivés responsives du diaporama du club.
 *
 * Pour chaque .jpg de public/assets/slideshow/, génère dans
 * public/assets/slideshow/gen/ les variantes AVIF et WebP aux largeurs
 * 640, 1024 et 1600 px (jamais au-delà de la largeur de la source :
 * une source de 900 px ne produit que 640 px).
 *
 * Exécution manuelle : `npm run images`. Les dérivés sont VERSIONNÉS,
 * le build reste reproductible sans étape lourde ni accès réseau.
 */
import sharp from 'sharp';
import { mkdirSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SOURCE = join('public', 'assets', 'slideshow');
const SORTIE = join(SOURCE, 'gen');
const LARGEURS = [640, 1024, 1600];
const QUALITE_AVIF = 50;
const QUALITE_WEBP = 78;

const ko = (chemin) => `${Math.round(statSync(chemin).size / 1024)} Ko`;

mkdirSync(SORTIE, { recursive: true });

const fichiers = readdirSync(SOURCE)
  .filter((f) => f.toLowerCase().endsWith('.jpg'))
  .sort();

const dimensions = [];

for (const fichier of fichiers) {
  const cheminSource = join(SOURCE, fichier);
  const nom = fichier.replace(/\.jpg$/i, '');
  const meta = await sharp(cheminSource).metadata();
  dimensions.push({ nom, w: meta.width, h: meta.height });

  const largeurs = LARGEURS.filter((l) => l <= meta.width);
  // Source plus petite que la plus petite largeur cible : on garde la source
  // telle quelle, sans jamais l'agrandir.
  if (largeurs.length === 0) largeurs.push(meta.width);

  const lignes = [];
  for (const largeur of largeurs) {
    const base = sharp(cheminSource).resize({ width: largeur, withoutEnlargement: true });

    const avif = join(SORTIE, `${nom}-${largeur}.avif`);
    await base.clone().avif({ quality: QUALITE_AVIF, effort: 6 }).toFile(avif);

    const webp = join(SORTIE, `${nom}-${largeur}.webp`);
    await base.clone().webp({ quality: QUALITE_WEBP, effort: 6 }).toFile(webp);

    lignes.push(`${largeur}px : avif ${ko(avif)} · webp ${ko(webp)}`);
  }

  console.log(`${fichier} (${meta.width}x${meta.height}, ${ko(cheminSource)})`);
  for (const ligne of lignes) console.log(`   ${ligne}`);
}

console.log('\nDimensions intrinsèques (à reporter dans SLIDES) :');
for (const d of dimensions) console.log(`   ${d.nom} : w=${d.w} h=${d.h}`);
