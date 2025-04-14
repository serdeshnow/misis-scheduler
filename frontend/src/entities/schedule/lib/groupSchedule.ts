import { GroupedSchedule, ScheduleRaw, WeekType } from '../model/types';

export function groupSchedule(data: ScheduleRaw[], week: WeekType): GroupedSchedule {
  const result: GroupedSchedule = {};
  data.filter(item => item.week === week).forEach(item => {
    const { day, order, title, location, teacher } = item;
    if (!result[order]) result[order] = {};
    if (!result[order][day]) result[order][day] = [];
    result[order][day].push({
      title,
      location: location.join(', '),
      teacher: teacher.join(', ')
    });
  });
  return result;
}
