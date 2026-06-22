import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['172.20.10.2', '192.168.18.4'],
  env: {
    VITE_POSTHOG_KEY: process.env.VITE_POSTHOG_KEY,
    VITE_POSTHOG_HOST: process.env.VITE_POSTHOG_HOST,
    VITE_META_PIXEL_ID: process.env.VITE_META_PIXEL_ID,
  },
};

export default nextConfig;
