/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts"],
  experimental: {
    optimizeFonts: true,
  },
}

module.exports = nextConfig
