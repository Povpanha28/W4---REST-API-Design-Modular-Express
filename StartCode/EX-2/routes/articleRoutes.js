import express from 'express';
import {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
} from '../controllers/articleContollers.js';

const router = express.Router();

router.get('/', getAllArticles);
router.get('/:id', getArticleById);
router.post('/', createArticle);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);

export default router;
