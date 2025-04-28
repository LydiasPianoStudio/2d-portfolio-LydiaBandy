import { defineConfig } from "vite";

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
        inlineDynamic: true,
      },
    },
    minify: false, // Temporarily disable minification to debug
    sourcemap: true,
  },
});
