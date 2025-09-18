import type { NextConfig } from "next";

// If deploying to a project page like https://<user>.github.io/strange-loop-manifesto,
// set the basePath to "/strange-loop-manifesto". You can override via NEXT_BASE_PATH env.
const repoBase = process.env.NEXT_BASE_PATH || "/strange-loop-manifesto";

const nextConfig: NextConfig = {
  output: "export",
  // For GitHub Pages project sites
  basePath: repoBase,
  assetPrefix: `${repoBase}/`,
  images: { unoptimized: true },
};

export default nextConfig;
