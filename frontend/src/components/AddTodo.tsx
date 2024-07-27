import React, { useState } from "react";
import { createTodo } from "../actions/TodoActions";
import { toast } from "react-toastify";

interface AddTodoProps {
  onAdd: (todo: { _id: string; title: string; completed: boolean }) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      try {
        const newTodo = await createTodo(title);
        onAdd(newTodo);
        setTitle("");
        toast.success("Todo added successfully");
      } catch (err) {
        console.log("Error", err);
      }
    }
  };

  return (
    <form
      className="w-full flex items-center justify-center gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        className="outline outline-2 rounded-md my-4 p-2 w-5/6 focus:outline-teal-400 focus:shadow-sm focus:shadow-teal-400 bg-transparent"
      />
      <button
        type="submit"
        className="text-sm bg-teal-600 text-white rounded-md p-2 hover:bg-teal-500 transition-colors duration-700 cursor-pointer ease-linear"
      >
        Submit
      </button>
    </form>
  );
};

export default AddTodo;
