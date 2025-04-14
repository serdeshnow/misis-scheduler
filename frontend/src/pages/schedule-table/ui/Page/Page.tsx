import React from 'react';
import s from './Page.module.scss';
import { Space, Table, Tag } from 'antd';
import { Title } from '@shared/ui';

const {Column, ColumnGroup} = Table;

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

// https://ant.design/components/table

export const ScheduleTablePage: React.FC = () => {
  return (
    <section className={s.root}>
      <Title>Расписание группы "ВЕНОМ"</Title>

      <div className={s.content}>
        <Table<DataType>
          dataSource={data}
          pagination={false}
        >
          <ColumnGroup title="Top Week" key="week">
            <Column title="№"/>
            <Column title="Time"/>


            <ColumnGroup title="Monday" key="day">
              <Column title="Subj. name"/>
              <Column title="Subj. type"/>
              <Column title="Subj. loc."/>
            </ColumnGroup>
          </ColumnGroup>
        </Table>

        <Table<DataType>
          dataSource={data}
          pagination={false}

        >
          <ColumnGroup title="Top Week" key="week">
            <Column title="№"/>
            <Column title="Time"/>


            <ColumnGroup title="Monday" key="day">
              <Column title="Subj. name"/>
              <Column title="Subj. type"/>
              <Column title="Subj. loc."/>
            </ColumnGroup>
          </ColumnGroup>
        </Table>
      </div>
    </section>
  );
};
