import React, { type ButtonHTMLAttributes } from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className, disabled, ...rest }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};
