import React from "react";
import "../Bot.css";

interface Task {
  id: string;
  title: string;
  completed?: boolean;
}

interface TaskItemProps {
  item: Task;
  index: number;
  onDone: (item: Task) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ item, index, onDone }) => {
  return (
    <li className="task-item">
      <span>
        <span style={{ fontWeight: "bold" }}>{index + 1}. </span>
        <span
          style={{
            textDecorationLine: item.completed ? "line-through" : "none",
          }}
        >
          {item.title}
        </span>
      </span>
      <input
        className="done-item"
        type="checkbox"
        checked={item.completed || false}
        onChange={() => onDone(item)}
      />
    </li>
  );
};
