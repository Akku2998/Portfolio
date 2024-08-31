/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "atom.redpixelthemes.com",
        pathname: "**",
      },
    ],
  },
  experimental: { esmExternals: true },
};

module.exports = nextConfig;
