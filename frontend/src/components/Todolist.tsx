import React, { useEffect, useState } from "react";
import { fetchTodos, deleteTodo, updateTodo } from "../actions/TodoActions";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const todos = await fetchTodos();
      setTodos(todos);
    };
    getTodos();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const handleToggle = async (id: string, completed: boolean) => {
    const updatedTodo = await updateTodo(id, completed);
    setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;