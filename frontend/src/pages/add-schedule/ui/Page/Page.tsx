import React from 'react';
import s from './Page.module.scss';
import { Title } from '@shared/ui';
import { AddScheduleCard } from '@entities/schedule';
import cn from 'classnames';
import { useNavigate } from 'react-router';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import IconButton from '@mui/material/IconButton';

export const AddSchedulePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className={s.root}>
      <div className={s.header}>
        <IconButton
          className={s.backBtn}
          onClick={() => navigate(-1)}
        >
          <ArrowBackRoundedIcon className={cn('light')} fontSize={"large"} />
        </IconButton>
        <Title>ДОБАВИТЬ НОВОЕ РАСПИСАНИЕ</Title>
      </div>

      <div className={s.content}>
        <AddScheduleCard/>
      </div>
    </section>
  );
};
