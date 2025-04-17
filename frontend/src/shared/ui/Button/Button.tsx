import React, { type ButtonHTMLAttributes } from 'react';
import cl from './Button.module.scss';
import cn from 'classnames';

type Variant = 'primary' | 'secondary' | 'transparent';
// type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: Variant;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
                                                children,
                                                className,
                                                startIcon,
                                                endIcon,
                                                variant="primary",
                                                disabled,
                                                ...rest
                                              }) => {
  const classes = cn(
    cl.button,
    className,
    {
      [cl.vPrimary]: variant === 'primary',
      [cl.vTransparent]: variant === 'transparent',
      [cl.disabled]: disabled,
    },
  );

  return (
    <button className={classes} {...rest}>
      {startIcon && startIcon}

      {children && <span className={cl.text}>{children}</span>}

      {endIcon && endIcon}
    </button>
  );
};
