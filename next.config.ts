import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack CSS caching issues
  experimental: {
    // Ensure consistent CSS loading
    optimizeCss: true,
    // Optimize CSS extraction
    cssChunking: 'strict',
  },
  // Force consistent builds
  reactStrictMode: true,
  // Optimize CSS loading
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Ensure CSS is inlined in production
  productionBrowserSourceMaps: false,
};

export default nextConfig;
