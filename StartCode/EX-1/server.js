import express from 'express';
import userRoutes from './routes/userRoutes.js';
import logger from './middleware/logger.js';

const app = express();
const PORT = 3000;

// Built-in middleware
app.use(express.json());

// Custom middleware
app.use(logger);

// Routes
app.use('/users', userRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

