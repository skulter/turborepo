import { defineTokens } from '@pandacss/dev';

export const tokens = defineTokens({
  fontSizes: {
    xs: { value: '0.75rem' },
    sm: { value: '0.875rem' },
    md: { value: '1rem' },
    lg: { value: '1.125rem' },
    xl: { value: '1.25rem' },
  },
  fontWeights: {
    normal: { value: '400' },
    medium: { value: '500' },
    bold: { value: '700' },
  },
  space: {
    1: { value: '0.25rem' },
    2: { value: '0.5rem' },
    3: { value: '0.75rem' },
    4: { value: '1rem' },
    5: { value: '1.25rem' },
    6: { value: '1.5rem' },
  },
});
