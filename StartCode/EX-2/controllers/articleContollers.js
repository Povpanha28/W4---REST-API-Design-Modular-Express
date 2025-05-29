import {articles} from '../models/data.js';

let nextArticleId = articles.length + 1;

export const getAllArticles = (req, res) => {
    res.json(articles);
};

export const getArticleById = (req, res) => {
    const article = articles.find(a => a.id === parseInt(req.params.id));
    if (!article) return res.status(404).json({ message: "Article not found" });
    res.json(article);
};

export const createArticle = (req, res) => {
    const { title, content, journalistId, categoryId } = req.body;
    const newArticle = { id: nextArticleId++, title, content, journalistId, categoryId };
    articles.push(newArticle);
    res.status(201).json(newArticle);
};

export const updateArticle = (req, res) => {
    const article = articles.find(a => a.id === parseInt(req.params.id));
    if (!article) return res.status(404).json({ message: "Article not found" });

    const { title, content, journalistId, categoryId } = req.body;
    article.title = title ?? article.title;
    article.content = content ?? article.content;
    article.journalistId = journalistId ?? article.journalistId;
    article.categoryId = categoryId ?? article.categoryId;

    res.json(article);
};

export const deleteArticle = (req, res) => {
    const index = articles.findIndex(a => a.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Article not found" });

    articles.splice(index, 1);
    res.status(204).send();
};
