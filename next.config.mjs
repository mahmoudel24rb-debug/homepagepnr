/** @type {import('next').NextConfig} */

// Deux cibles de build :
//  - démo GitHub Pages (défaut)           : servie sous /homepagepnr
//  - prod o2switch (`npm run build:prod`) : servie à la racine de
//    pionniersdetouraine.fr → NEXT_PUBLIC_BASE_PATH='/'
//    (sentinelle « racine » : une valeur VIDE ne serait pas inlinée par Next
//    dans les bundles client : voir src/lib/asset.ts, à garder aligné).
const rawBase = process.env.NEXT_PUBLIC_BASE_PATH ?? '/homepagepnr';
const basePath = rawBase === '/' ? '' : rawBase;

const nextConfig = {
  output: 'export',
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
