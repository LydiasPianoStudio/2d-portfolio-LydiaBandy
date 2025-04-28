import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/2d-portfolio-LydiaBandy/",
  build: {
    outDir: "dist",
    assetsInclude: ["**/*.ttf", "**/*.png", "**/*.json"],
    rollupOptions: {
      input: {
        main: "./index.html",
      },
      output: {
        manualChunks: undefined,
      },
    },
    resolve: {
      alias: {
        kaboom: resolve("./node_modules/kaboom/dist/kaboom.mjs"), // Use absolute path to kaboom module
      },
    },
    sourcemap: true, // Enable source maps for debugging
    minify: false, // Temporarily disable minification
  },
  publicDir: "public",
});
