/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,

  // ⚡ IMAGE OPTIMIZATION
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'espacoinvisivel.com.br',
      },
    ],
  },

  // ⚡ EXPERIMENTAL OPTIMIZATIONS
  experimental: {
    optimizePackageImports: [
      '@/components',
      '@/lib',
    ],
  },
};

export default nextConfig;