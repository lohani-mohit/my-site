/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/my-site",
  assetPrefix: "/my-site",
};

module.exports = nextConfig;
