import { definePreset } from '@pandacss/dev';
import { theme, themes } from "./index.js"

const customPreset: ReturnType<typeof definePreset> = definePreset({
  name:'monoUI',
  theme,
  themes,
});
export default customPreset;
