import React from "react";

import { TodoItemProps } from "../types/types";
import { Trash } from "lucide-react";

import { motion } from "framer-motion";

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle }) => {
  return (
    <motion.div
      className="border flex items-center justify-between w-full p-2 mt-2 rounded-md"
      initial={{
        opacity: 0,
        x: 25,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 25,
      }}
    >
      <div className="ml-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo._id, !todo.completed)}
          id={todo._id}
          className="bg-white text-white"
        />
        <label
          className={`ml-4 ${
            todo.completed && "text-gray-300 dark:text-gray-400"
          } `}
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
    </motion.div>
  );
};

export default TodoItem;
