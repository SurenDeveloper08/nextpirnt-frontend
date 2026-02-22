import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    // Note: 'remotePatterns' is the modern preferred way over 'domains'
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  devIndicators: {
    // buildActivity is removed. 
    // Use appIsrStatus if you want to control the revalidation indicator.
    appIsrStatus: false, 
  },
};

export default nextConfig;