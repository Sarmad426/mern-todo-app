import { Router } from 'express';
import Todo from '../models/Todo.js';

const router = Router();

// GET all todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new todo
router.post('/', async (req, res) => {
    const todo = new Todo({
        title: req.body.title
    });

    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
});

// PATCH a todo by ID
router.patch('/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { completed: req.body.completed },
            { new: true } // Return the updated document
        );

        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.json(updatedTodo);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a todo by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.json({ message: 'Todo deleted' });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
