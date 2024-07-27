import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/Todolist";
import { ITodo } from "./types/types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAdd = (todo: {
    _id: string;
    title: string;
    completed: boolean;
  }) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <h1 className="text-4xl font-bold">Todo List</h1>
      <AddTodo onAdd={handleAdd} />
      <TodoList />
    </div>
  );
};

export default App;
