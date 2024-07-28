import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // Import CORS middleware
import todos from './routes/todos.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:5173' // Specify frontend origin
}));

app.use(express.json());

mongoose.connect(process.env.DATABASE_URL!)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/api/todos', todos);

app.listen(port, () => console.log(`Server running on port ${port}`));
