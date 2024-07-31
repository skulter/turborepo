import { tokens } from "./token.js";
import { baseSemanticTokens, customSemanticTokens, darkSemanticTokens } from "./semanticTokens.js"
import {buttonRecipe} from "./recipe/button.js"

export const theme = {
  extend: {
    // keyframes: {
    //   ripple: buttonKeyframes,
    // },
    recipes: {
      button: buttonRecipe,
    },
    tokens,
    semanticTokens: baseSemanticTokens,
  },
};

export const themes = {
  light: {
    tokens,
    semanticTokens: baseSemanticTokens,
  },
  dark: {
    tokens,
    semanticTokens: darkSemanticTokens,
  },
  custom: {
    tokens,
    semanticTokens: customSemanticTokens,
  },
};
