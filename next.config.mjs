/** @type {import('next').NextConfig} */

// Sur GitHub Pages le site est servi sous /homepagepnr.
// (En production sur pionniersdetouraine.fr : passer basePath/assetPrefix à ''
// et adapter BASE_PATH dans src/lib/asset.ts.)
const repo = 'homepagepnr';

const nextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
