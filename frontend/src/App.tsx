import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold my-2 text-center text-gray-800">
            Todo List
          </h1>
          <p className="text-gray-500">Make yourself productive</p>
        </div>
        <TodoList />
        <AddTodo onAdd={handleAdd} />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
