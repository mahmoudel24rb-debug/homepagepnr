# Pionniers de Touraine — Homepage

Refonte SEO de la page d'accueil de **pionniersdetouraine.fr** (club de football
américain & flag football à Tours), sur la charte graphique de la landing
« Nous rejoindre » ([lppionnier](https://github.com/mahmoudel24rb-debug/lppionnier)).

Démo : https://mahmoudel24rb-debug.github.io/homepagepnr/

## SEO

- H1 + hiérarchie h2/h3 sémantique, une section par requête cible
  (football américain Tours, flag football Tours, école de flag, infos pratiques)
- Données structurées JSON-LD : `SportsClub` (adresse réelle du stade de la
  Chambrerie, réseaux sociaux) + `FAQPage` (6 questions)
- `robots.txt` + `sitemap.xml`, canonique vers `pionniersdetouraine.fr`
  (la démo GitHub Pages ne concurrence pas le domaine de production)
- Contenu 100% factuel : adresse, horaires et accès repris du site actuel

## Stack

- **Next.js 14** (App Router, export statique `output: 'export'`)
- Charte partagée : Futura Condensed / Neuething, crème `#fffaf0`,
  ambre `#ffad00`, bordeaux `#6f2c30`, texture topographique
- Données du club centralisées dans [`src/lib/infos.ts`](src/lib/infos.ts)

## Développement

```bash
npm install
npm run dev      # http://localhost:3001/homepagepnr
npm run build    # site statique dans ./out
```

## Mise en production sur pionniersdetouraine.fr

1. Passer `basePath`/`assetPrefix` à `''` dans `next.config.mjs`
2. Passer `BASE_PATH` à `''` dans `src/lib/asset.ts`
3. Mettre à jour `REJOINDRE_URL` dans `src/lib/infos.ts` (URL finale du tunnel)
