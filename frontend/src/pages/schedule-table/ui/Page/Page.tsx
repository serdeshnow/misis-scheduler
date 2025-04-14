import { groupSchedule } from '@/entities/schedule/lib/groupSchedule';
import { ScheduleTable } from '@/widgets/schedule-table/ui/ScheduleTable';
import { ScheduleRaw } from '@/entities/schedule/model/types';

import rawData from '@/shared/__mock/BPM-23-1.json';

export const ScheduleTablePage = () => {
  const upper = groupSchedule(rawData.schedule as ScheduleRaw[], 0);
  const lower = groupSchedule(rawData.schedule as ScheduleRaw[], 1);

  return (
    <div style={{ padding: '16px' }}>
      <ScheduleTable data={upper} title="Верхняя неделя" />
      <ScheduleTable data={lower} title="Нижняя неделя" />
    </div>
  );
}
