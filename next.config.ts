import type { NextConfig } from "next";
import path from "path";
// TODO: 这里做了什么？

const jsdomStubs = [
  "jsdom",
  "jsdom/lib/jsdom/living/generated/utils",
  "jsdom/lib/jsdom/utils",
];

const emptyModule = path.resolve(__dirname, "src/lib/empty-module.ts");

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      for (const mod of jsdomStubs) {
        config.resolve.alias[mod] = emptyModule;
      }
    }
    return config;
  },
  turbopack: {
    resolveAlias: Object.fromEntries(
      jsdomStubs.map((mod) => [mod, "./src/lib/empty-module.ts"])
    ),
  },
};

export default nextConfig;
