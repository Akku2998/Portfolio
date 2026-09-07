/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "atom.redpixelthemes.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        pathname: "**",
      },
    ],
  },
  experimental: { esmExternals: true },
};

module.exports = nextConfig;
