import React, { useState } from "react";
import "../Bot.css";

interface AddTaskProps {
  onAdd: (note: string) => void;
}

interface AddTaskState {
  note: string;
}

export const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
  const [note, setNote] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAdd(note);
    setNote('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="add-task"
        type="text"
        placeholder="Add Note"
        value={note}
        onChange={handleChange}
        required
        autoFocus
      />
    </form>
  );
};
