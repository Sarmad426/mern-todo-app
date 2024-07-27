import axios from 'axios';

const API_URL = 'http://localhost:5000/api/todos';

export const fetchTodos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createTodo = async (title: string) => {
    const response = await axios.post(API_URL, { title });
    return response.data;
};

export const deleteTodo = async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
};

export const updateTodo = async (id: string, completed: boolean) => {
    const response = await axios.patch(`${API_URL}/${id}`, { completed });
    return response.data;
};
