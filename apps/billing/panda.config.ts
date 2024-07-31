import { defineConfig } from "@pandacss/dev";
import customPreset from "@repo/ui/src/theme/customPreset";

export default defineConfig({
  jsxFramework: "react",
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/app/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
  presets: ["@pandacss/dev/presets", customPreset],

  // The output directory for your css system
  outdir: "@mono/acme-ui",
});
