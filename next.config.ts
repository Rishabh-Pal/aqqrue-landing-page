import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack CSS caching issues
  experimental: {
    // Ensure consistent CSS loading
    optimizeCss: true,
  },
  // Force consistent builds
  reactStrictMode: true,
};

export default nextConfig;
