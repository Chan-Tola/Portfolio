import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicit root keeps Turbopack from guessing a parent folder when other lockfiles exist.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
