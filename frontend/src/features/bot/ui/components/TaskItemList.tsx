import React from "react";
import { TaskItem } from './TaskItem';
import "../Bot.css";

interface Task {
  id: string;
  title: string;
  completed?: boolean;
}

interface TaskItemListProps {
  items: Task[];
  onDone: (item: Task) => void;
}

export const TaskItemList: React.FC<TaskItemListProps> = ({ items, onDone }) => {
  return (
    <ul className="notes">
      {items.map((item, index) => (
        <TaskItem
          item={item}
          key={item.id} // Лучше использовать уникальный id вместо индекса
          index={index}
          onDone={() => onDone(item)}
        />
      ))}
    </ul>
  );
};
