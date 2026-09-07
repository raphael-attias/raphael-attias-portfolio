/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Le site est 100% statique : toutes les pages sont pre-rendues au build (SSG).
  // Aucun handler serveur, aucune route API, aucune variable d'environnement requise.
  images: {
    // Aucune image distante n'est utilisee ; on garde l'optimiseur inactif
    // pour rester compatible avec un `next build` + export statique.
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
