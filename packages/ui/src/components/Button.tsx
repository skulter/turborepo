import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { button } from '@ui/recipes'
export const Button = ({ children, color, ...props }: PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement> & any) => {
  return (
      <>
          <button className={button()} {...props}>
              {children}
          </button>
      </>
  );
};

