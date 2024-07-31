import {cva} from "@ui/css";

export const button = cva({
    base: {
        display: 'flex',
    },
    variants: {
        visual: {
            solid: { bg: 'red.200', color: 'white' },
            outline: { borderWidth: '1px', borderColor: 'red.200' },
        },
        size: {
            sm: { padding: '4', fontSize: '12px' },
            lg: { padding: '8', fontSize: '24px' },
        },
    },
    defaultVariants: {
        visual: 'solid',
        size: 'lg',
    },
});