import React from 'react';
import s from './Page.module.scss';
import { Link } from 'react-router';
import { Title } from '@shared/ui';
import { AddScheduleCard } from '@entities/schedule';

export const AddSchedulePage: React.FC = () => {
  return (
    <section className={s.root}>
      <Title>ADD SCHEDULE</Title>
      <Link to={'/'}>home</Link>

      <div className={s.content}>
        <AddScheduleCard/>
      </div>
    </section>
  );
};
