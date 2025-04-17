import s from './Page.module.scss';
import { groupSchedule } from '@/entities/schedule/lib/groupSchedule';
import { ScheduleTable } from '@/widgets/schedule-table/ui/ScheduleTable';
import { ScheduleRaw } from '@/entities/schedule/model/types';

import rawData from '@/shared/__mock/BPM-23-1.json';
import { Title } from '@shared/ui';

export const ScheduleTablePage = () => {
  console.log(rawData.schedule);
  const upper = groupSchedule(rawData.schedule as ScheduleRaw[], 0);
  const lower = groupSchedule(rawData.schedule as ScheduleRaw[], 1);
  console.log(upper);

  return (
    <div className={s.root}>
      <Title>РАСПИСАНИЕ ГРУППЫ "ВЕНОМ"</Title>

      <div className={s.tables}>
        <ScheduleTable data={upper} title="Верхняя неделя" />
        <ScheduleTable data={lower} title="Нижняя неделя" />
      </div>
    </div>
  );
}
