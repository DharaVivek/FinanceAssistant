import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import chatRoutes from './routes/chatRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/chat', chatRoutes);

app.listen(port, () => {
  console.log(`🚀 Node Backend server running on http://localhost:${port}`);
});
