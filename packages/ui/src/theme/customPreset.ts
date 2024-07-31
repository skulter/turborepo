import { definePreset } from '@pandacss/dev';
import {globalCss, theme, themes} from "./index.js"


const customPreset: ReturnType<typeof definePreset> = definePreset({
  name:'monoUI',
  globalCss,
  theme,
  themes,
});
export default customPreset;
