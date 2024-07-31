import { defineRecipe } from '@pandacss/dev';
import { defineKeyframes } from '@pandacss/dev';

// export const buttonKeyframes = defineKeyframes({
//   ripple: {
//     to: {
//       transform: 'scale(4)',
//       opacity: '0',
//     },
//   },
// });

export const buttonRecipe: ReturnType<typeof defineRecipe> = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',
  base: {
    position: 'relative',
    overflow: 'hidden',
    transition: 'background-color 0.3s',
    cursor: 'pointer',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    outline: 'none',
    color: 'buttonText',
    background: 'buttonBackground',
    _hover: {
      backgroundColor: 'buttonBackgroundHover',
    },
    _before: {
      content: "''",
      position: 'absolute',
      display: 'block',
      width: '100%',
      height: '100%',
      top: 'var(--top-cursor)',
      left: 'var(--left-cursor)',
      pointerEvents: 'none',
      backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 10%, transparent 10.01%)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      transform: 'scale(20, 20)',
      opacity: '0',
      transition: 'transform 1s, opacity 1s',
    },
    _active: {
      _before: {
        transform: 'scale(0, 0)',
        opacity: '0.3',
        transition: '0s',
      },
    },
  },
  variants: {
    color: {
      primary: {
        backgroundColor: 'blue.500',
        _hover: { backgroundColor: 'blue.600' },
      },
      secondary: {
        backgroundColor: 'gray.500',
        _hover: { backgroundColor: 'gray.600' },
      },
      error: {
        backgroundColor: 'red.600',
        _hover: { backgroundColor: 'gray.600' },
      },
    },
  },
});
