import React from 'react';
import { AddTask } from '../components/AddTask';
import { TaskItemList } from '../components/TaskItemList';

interface Task {
  id: string;
  title: string;
  completed?: boolean;
}

interface TaskListProps {
  items: Task[];
  onAdd: (note: string) => void;
  onDone: (note: Task) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ items, onAdd, onDone }) => {
  return (
    <main className="container">
      <AddTask onAdd={onAdd} />
      <TaskItemList items={items} onDone={onDone} />
    </main>
  );
};
