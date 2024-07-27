import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/Todolist";

const App: React.FC = () => {
  const [todos, setTodos] = useState([]);

  const handleAdd = (todo: {
    _id: string;
    title: string;
    completed: boolean;
  }) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo onAdd={handleAdd} />
      <TodoList />
    </div>
  );
};

export default App;
