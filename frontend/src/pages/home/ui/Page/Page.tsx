// import ReactLogo from '@/shared/assets/svg/react.svg?react'; // ensure you use ?react when
// you want to render svg as component
// import viteLogo from '/vite.svg?url'; // ensure you use ?url when importing svg to <img/>

// import s from './Page.module.scss';
// import { env } from '@/shared/lib/env.ts';
// import { useState } from 'react';
import s from './Page.module.scss';
import { Title } from '@shared/ui';
import {ScheduleCard } from '@entities/schedule';

export const HomePage = () => {
  const SCHEDULE_CARD_MOCK = {
    id:1,
    role:'student',
    name:'VENOM',
    department:"ИКН",
    course:"2",
    group:"БПМ-23-3",
    subgroup:'1',
    image:'https://www.bigtime.net/wp-content/uploads/2024/02/Schedule-Conflicts_-How-to-Deal-with-Them-and-Benefit-From-the-Challenge.png',

  }

  return (
    <>
      <Title>ВАШИ РАСПИСАНИЯ</Title>
      <div className={s.list}>
        <ScheduleCard schedule={SCHEDULE_CARD_MOCK} />
        <ScheduleCard schedule={SCHEDULE_CARD_MOCK} />
        <ScheduleCard schedule={SCHEDULE_CARD_MOCK} />
        <ScheduleCard schedule={SCHEDULE_CARD_MOCK} />
      </div>
    </>
  );
};
