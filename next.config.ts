import type { NextConfig } from "next";
import path from 'path'

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  /* config options here */
  experimental: {
    reactCompiler: true,
  },
}

export default nextConfig;
