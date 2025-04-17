import { GroupedSchedule, ScheduleRaw, WeekType } from '../model/types';

// export function groupSchedule(data: ScheduleRaw[], week: WeekType): GroupedSchedule {
//   const result: GroupedSchedule = {};
//   data.filter(item => item.week === week).forEach(item => {
//     const { day, order, title, location, teacher } = item;
//     if (!result[order]) result[order] = {};
//     if (!result[order][day]) result[order][day] = [];
//     result[order][day].push({
//       title,
//       location: location.join(', '),
//       teacher: teacher.join(', ')
//     });
//   });
//   return result;
// }

export function groupSchedule(schedule: ScheduleRaw[], targetWeek: WeekType): GroupedSchedule {
  const grouped: GroupedSchedule = {};

  for (const entry of schedule) {
    if (entry.week !== targetWeek) continue;

    const { day, order } = entry;

    const [title, type] = parseTitle(entry.title);
    const location = entry.location.join(', ');

    const item = {
      title,
      type,
      location,
    };

    if (!grouped[order]) {
      grouped[order] = {};
    }

    if (!grouped[order][day]) {
      grouped[order][day] = [];
    }

    grouped[order][day].push(item);
  }

  return grouped;
}

function parseTitle(fullTitle: string): [string, string] {
  const match = fullTitle.match(/^(.*?)\s*\((.*?)\)$/);
  if (match) {
    return [match[1].trim(), match[2].trim()];
  }
  return [fullTitle, ''];
}

