import React from "react";

interface TodoItemProps {
  todo: {
    _id: string;
    title: string;
    completed: boolean;
  };
  onDelete: (id: string) => void;
  onToggle: (id: string, completed: boolean) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo._id, !todo.completed)}
      />
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
