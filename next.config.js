/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/my-site",
  assetPrefix: "/my-site",
  trailingSlash: true,
  distDir: "dist",
  // Ensure proper static generation
  generateStaticParams: async () => {
    return [];
  },
  // Disable server components for static export
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
