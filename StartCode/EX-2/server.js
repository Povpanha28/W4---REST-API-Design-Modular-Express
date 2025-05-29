import express from 'express';
import articleRoutes from './routes/articleRoutes.js';
import journalistRoutes from './routes/journalistRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mount routes
app.use('/articles', articleRoutes);
app.use('/journalists', journalistRoutes);
app.use('/categories', categoryRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
