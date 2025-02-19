/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  distDir: "dist",
  images: { unoptimized: true },
  basePath: isProd ? "/memoryLane" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/memoryLane" : "",
  },
};

module.exports = nextConfig;
