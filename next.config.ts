import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable static export for Vercel deployment
  // Remove 'output: export' if you need dynamic features
  images: {
    // For static export, use unoptimized images
    // unoptimized: true,
  },
  // Trailing slashes for cleaner URLs
  trailingSlash: true,
};

export default nextConfig;