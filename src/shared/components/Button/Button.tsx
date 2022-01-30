import cn from 'classnames';
import { ReactNode, ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

export const Button = ({ children, onClick, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(styles.button, className)} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
