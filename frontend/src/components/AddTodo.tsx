import React, { useState } from "react";
import { createTodo } from "../actions/TodoActions";

interface AddTodoProps {
  onAdd: (todo: { _id: string; title: string; completed: boolean }) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      const newTodo = await createTodo(title);
      onAdd(newTodo);
      setTitle("");
      window.location.reload();
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        className="outline outline-1 rounded-md m-6 p-3 md:w-2/4 sm:3/4 w-full"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
