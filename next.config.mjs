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

  // ⚡ TARGET MODERN BROWSERS (removes polyfills)
  targets: {
    chrome: 90,
    firefox: 87,
    safari: 14,
    edge: 90,
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