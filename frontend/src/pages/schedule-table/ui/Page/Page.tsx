import s from './Page.module.scss';
import { groupSchedule } from '@/entities/schedule/lib/groupSchedule';
import { ScheduleTable } from '@/widgets/schedule-table/ui/ScheduleTable';
import { ScheduleRaw } from '@/entities/schedule/model/types';
import { useNavigate } from 'react-router';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import IconButton from '@mui/material/IconButton';

import cn from 'classnames';


import rawData from '@/shared/__mock/BPM-23-1.json';
import { Title } from '@shared/ui';

export const ScheduleTablePage = () => {
  const navigate = useNavigate();

  console.log(rawData.schedule);
  const upper = groupSchedule(rawData.schedule as ScheduleRaw[], 0);
  const lower = groupSchedule(rawData.schedule as ScheduleRaw[], 1);
  console.log(upper);

  return (
    <>
      <div className={s.header}>
        <IconButton
          className={s.backBtn}
          onClick={() => navigate(-1)}
        >
          <ArrowBackRoundedIcon className={cn('light')} fontSize={"large"} />
        </IconButton>
        <Title>РАСПИСАНИЕ ГРУППЫ "ВЕНОМ"</Title>
      </div>

      <div className={s.tables}>
        <ScheduleTable data={upper} title="Верхняя неделя" />
        <ScheduleTable data={lower} title="Нижняя неделя" />
      </div>
    </>
  );
};
