/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.nexprint.ae",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;