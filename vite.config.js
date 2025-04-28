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
    },
  },
});
