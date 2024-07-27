import React from "react";

import { TodoItemProps } from "../types/types";
import { Trash } from "lucide-react";

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="border flex items-center justify-between w-full p-2 mt-2 rounded-md">
      <div className="ml-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo._id, !todo.completed)}
          id={todo._id}
        />
        <label
          className={`ml-4 ${todo.completed && "text-gray-300"} `}
          htmlFor={todo._id}
        >
          {todo.title}
        </label>
      </div>
      <button
        title="Delete todo"
        onClick={() => onDelete(todo._id)}
        className="bg-red-500 text-white rounded-md px-2 py-1 hover:bg-red-400 transition-colors duration-700 cursor-pointer ease-linear"
      >
        <Trash className="w-5" />
      </button>
    </div>
  );
};

export default TodoItem;
