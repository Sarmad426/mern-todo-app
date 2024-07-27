
export interface ITodo {
    _id: string
    title: string;
    completed: boolean;
}


export interface TodoItemProps {
    todo: ITodo,
    onDelete: (id: string) => void;
    onToggle: (id: string, completed: boolean) => void;
}