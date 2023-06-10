/** @type {import('next').NextConfig} */
// const nextConfig = {}
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  resolve: {
    fallback: {
      net: false
    }
  },
};

module.exports = nextConfig
