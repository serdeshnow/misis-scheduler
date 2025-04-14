import { Table } from 'antd';
import { GroupedSchedule, ScheduleEntry } from '@/entities/schedule/model/types';
import { TIME_SLOTS, DAYS } from '@/features/schedule';

interface Props {
  data: GroupedSchedule;
  title?: string;
}

export const ScheduleTable = ({ data, title }: Props) => {
  const columns = [
    { title: '№', dataIndex: 'order', key: 'order', width: 40 },
    { title: 'Время', dataIndex: 'time', key: 'time', width: 120 },
    ...DAYS.map((day, idx) => ({
      title: day,
      dataIndex: `day${idx}`,
      key: `day${idx}`,
      render: (entries: ScheduleEntry[]) => (
        <>
          {entries?.map((e, i) => (
            <div key={i}>
              <b>{e.title}</b><br />
              {e.teacher && <span>{e.teacher}<br /></span>}
              {e.location && <span>{e.location}</span>}
              <hr />
            </div>
          ))}
        </>
      )
    }))
  ];

  const rows = TIME_SLOTS.map(({ order, time }) => {
    const row: any = { key: order, order, time };
    for (let d = 0; d < 6; d++) {
      row[`day${d}`] = data[order]?.[d] || [];
    }
    return row;
  });

  return (
    <Table
      columns={columns}
      dataSource={rows}
      bordered
      pagination={false}
      title={title ? () => title : undefined}
    />
  );
};
