import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  images: {
    unoptimized: true,
    qualities: [75, 85, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
    ],
  },
};

export default nextConfig;
