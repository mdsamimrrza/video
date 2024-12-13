import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';  
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.use('/api', userRoutes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });


export default app;
