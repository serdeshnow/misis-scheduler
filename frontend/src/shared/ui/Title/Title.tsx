import React, { type PropsWithChildren } from 'react';
import s from './Title.module.scss';

interface TitleProps extends PropsWithChildren {}

export const Title: React.FC<TitleProps> = ({children}) => {
  return (
    <h2 className={s.title}>{children}</h2>
  );
};
