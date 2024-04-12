// uno.config.ts
import { defineConfig, presetAttributify, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      light: {
        100: "#F8F8F8",
        200: "#F2F2F2",
        300: "#EBEBEB",
        400: "#E5E5E5",
        500: "#DFDFDF",
        600: "#B2B2B2",
        700: "#858585",
        800: "#595959",
        900: "#2C2C2C",
      },
      dark: {
        100: "#D8D8D8",
        200: "#B2B2B2",
        300: "#8C8C8C",
        400: "#666666",
        500: "#404040",
        600: "#333333",
        700: "#262626",
        800: "#191919",
        900: "#0C0C0C",
      },
      primary: {
        100: "#d8f5e9",
        200: "#b1ebd3",
        300: "#8ae2bd",
        400: "#63d8a7",
        500: "#3dcf91",
        600: "#30a574",
        700: "#247c57",
        800: "#185239",
        900: "#0c291c",
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: ["Inter", "Inter:400,500,600,700,800,900"],
        mono: ["Ubuntu", "Ubuntu:400,500,700"],
      },
    }),
  ],
});
