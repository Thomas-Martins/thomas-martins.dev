import react from "@astrojs/react";
import astroI18next from "astro-i18next";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    astroI18next(),
    react(),
  ],
});
