import { defineSemanticTokens } from '@pandacss/dev';
export const baseSemanticTokens = defineSemanticTokens({
  colors: {
    background: {
      value: '{colors.white}',
    },
    text: {
      value: '{colors.gray.900}',
    },
    primary: {
      value: '{colors.blue.500}',
    },
    secondary: {
      value: '{colors.blue.500}',
    },
    buttonBackground: {
      value: '{colors.sky.800}',
    },
    buttonBackgroundHover: {
      value: '{colors.sky.600}',
    },
    buttonText: {
      value: '{colors.sky.50}',
    },
  },
  fontSizes: {
    body: { value: '{fontSizes.md}' },
    heading: { value: '{fontSizes.xl}' },
  },
  fontWeights: {
    body: { value: '{fontWeights.normal}' },
    heading: { value: '{fontWeights.bold}' },
  },
  space: {
    small: { value: '{space.2}' },
    medium: { value: '{space.4}' },
    large: { value: '{space.6}' },
  },
});

export const darkSemanticTokens = defineSemanticTokens({
  colors: {
    background: {
      value: '{colors.neutral.900}',
    },
    text: {
      value: '{colors.neutral.100}',
    },
    primary: {
      value: '{colors.blue.400}',
    },
    secondary: {
      value: '{colors.gray.400}',
    },
    buttonBackground: {
      value: '{colors.blue.300}',
    },

    buttonText: {
      value: '{colors.blue.900}',
    },
  },
  fontSizes: {
    body: { value: '{fontSizes.md}' },
    heading: { value: '{fontSizes.xl}' },
  },
  fontWeights: {
    body: { value: '{fontWeights.normal}' },
    heading: { value: '{fontWeights.bold}' },
  },
  space: {
    small: { value: '{space.2}' },
    medium: { value: '{space.4}' },
    large: { value: '{space.6}' },
  },
});
export const customSemanticTokens = defineSemanticTokens({
  colors: {
    background: {
      value: '{colors.green.50}',
    },
    text: {
      value: '{colors.green.800}',
    },
    primary: {
      value: '{colors.green.500}',
    },
    secondary: {
      value: '{colors.green.600}',
    },
  },
  fontSizes: {
    body: { value: '{fontSizes.md}' },
    heading: { value: '{fontSizes.xl}' },
  },
  fontWeights: {
    body: { value: '{fontWeights.normal}' },
    heading: { value: '{fontWeights.bold}' },
  },
  space: {
    small: { value: '{space.2}' },
    medium: { value: '{space.4}' },
    large: { value: '{space.6}' },
  },
});
