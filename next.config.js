/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/my-site",
  assetPrefix: "/my-site/",
  trailingSlash: true,
  distDir: "dist",
  // Disable server components for static export
  experimental: {
    appDir: true,
  },
  // Ensure index.html is generated
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

module.exports = nextConfig;
