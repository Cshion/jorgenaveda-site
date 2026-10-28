import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev only: permite hidratar y recargar en caliente al abrir http://127.0.0.1:3417
  allowedDevOrigins: ["127.0.0.1"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
