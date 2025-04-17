import React from 'react';
import s from './AppLayout.module.scss';
import { Outlet } from 'react-router';
import { Navbar } from '@widgets/navbar';

export const AppLayout: React.FC = () => {

  return (
    <section className={s.layout}>
      <Navbar />
      <main className={s.main}>
        <Outlet />
      </main>
    </section>
  );
};
