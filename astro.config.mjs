import astroI18next from "astro-i18next";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://thomas-martins.dev",
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    astroI18next(),
    sitemap({
      i18n: {
        defaultLocale: "fr",
        locales: {
          en: "en-US",
          fr: "fr-FR",
        },
      },
    }),
  ],
});
