/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["atom.redpixelthemes.com"],
  },
  experimental: { esmExternals: true },
};

module.exports = nextConfig;
