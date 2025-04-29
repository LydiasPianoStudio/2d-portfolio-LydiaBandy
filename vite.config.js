import { defineConfig } from "vite";

export default defineConfig({
  base: "/2d-portfolio-LydiaBandy/",
  build: {
    outDir: "dist",
    assetsDir: "", // prevents assets from being nested
    assetsInclude: ["**/*.ttf", "**/*.png", "**/*.json"],
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
  publicDir: "public",
});
