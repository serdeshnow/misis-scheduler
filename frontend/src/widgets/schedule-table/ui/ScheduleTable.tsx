// import s from './ScheduleTable.module.scss';
import { Table } from 'antd';
import { GroupedSchedule } from '@/entities/schedule/model/types';
import { TIME_SLOTS, DAYS } from '@/features/schedule';
import type { TableProps } from 'antd';

interface Props {
  data: GroupedSchedule;
  title?: string;
}

export const ScheduleTable = (
  {
    data,
    title
  }: Props) => {
  const columns: TableProps<GroupedSchedule>['columns'] = [
    {
      title: title,
      children: [
        {
          title: '№',
          dataIndex: 'order',
          key: 'order',
          fixed: 'left',
          align: 'center',
          width: 60,
        },
        {
          title: 'Время',
          dataIndex: 'time',
          key: 'time',
          fixed: 'left',
          width: 120,
        },
        ...DAYS.map((day, idx: number) => ({
          title: day,
          dataIndex: `day-${idx}`,
          key: `day-${idx}`,
          children: [
            {
              // title: 'Название',
              dataIndex: `subject-${idx}`,
              key: `subject-${idx}`,
              onHeaderCell: () => ({colSpan: 0}),
            },
            {
              // title: 'Тип',
              dataIndex: `type-${idx}`,
              key: `type-${idx}`,
              onHeaderCell: () => ({colSpan: 0}),

            },
            {
              // title: 'Каб.',
              dataIndex: `location-${idx}`,
              key: `location-${idx}`,
              onHeaderCell: () => ({colSpan: 0}),

            },
          ]
        })),
      ],
    },
  ];
  // const columns = [
  //   { title: '№', dataIndex: 'order', key: 'order', width: 40 },
  //   { title: 'Время', dataIndex: 'time', key: 'time', width: 120 },
  //   ...DAYS.map((day, idx) => ({
  //     title: day,
  //     dataIndex: `day${idx}`,
  //     key: `day${idx}`,
  //     render: (entries: ScheduleEntry[]) => (
  //       <>
  //         {entries?.map((e, i) => (
  //           <div key={i}>
  //             <b>{e.title}</b><br />
  //             {e.teacher && <span>{e.teacher}<br /></span>}
  //             {e.location && <span>{e.location}</span>}
  //           </div>
  //         ))}
  //       </>
  //     )
  //   }))
  // ];
  //
  // const rows: GroupedSchedule[] = TIME_SLOTS.map(({ order, time }) => {
  //   const row: any = { key: order, order, time };
  //   for (let d = 0; d < 6; d++) {
  //     row[`day${d}`] = data[order]?.[d] || [];
  //   }
  //   return row;
  // });

  const rows = TIME_SLOTS.map(({ order, time }) => {
    const row: any = { key: order, order, time };

    for (let d = 0; d < DAYS.length; d++) {
      const entries = data[order]?.[d] || [];

      row[`subject-${d}`] = entries.map(e => e.title).join('\n');
      row[`type-${d}`] = entries.map(e => e.type).join('\n');
      row[`location-${d}`] = entries.map(e => e.location).join('\n');
    }

    return row;
  });

  return (
    <Table
      columns={columns}
      dataSource={rows}
      // bordered
      pagination={false}
      scroll={{ x: 'max-content' }}
    />
  );
};
