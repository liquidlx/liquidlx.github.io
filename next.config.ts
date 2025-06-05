import type { NextConfig } from "next";
/**
 * @type {import('next').NextConfig}
 */
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/liquidlx.github.io",
  trailingSlash: true,
};

module.exports = nextConfig;
