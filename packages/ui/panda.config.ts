import { defineConfig } from "@pandacss/dev";
import customPreset from "./src/theme/customPreset";

export default defineConfig({

  jsxFramework: "react",
  // Whether to use css reset
  preflight: true,
  clean:true,
  // Where to look for your css declarations
  include: ["./src/**/*.{ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  presets: ["@pandacss/dev/presets", customPreset],

  // staticCss: {
  //   themes: ['light', 'dark', 'custom'],
  // },

  // The output directory for your css system
  outdir: "@mono/acme-components",
});
