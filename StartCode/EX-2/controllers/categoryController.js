import { categories, articles } from '../models/data.js';

let nextCategoryId = categories.length + 1;

export const getAllCategories = (req, res) => {
    res.json(categories);
};

export const getCategoryById = (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.json(category);
};

export const createCategory = (req, res) => {
    const { name } = req.body;
    const newCategory = { id: nextCategoryId++, name };
    categories.push(newCategory);
    res.status(201).json(newCategory);
};

export const updateCategory = (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.status(404).json({ message: "Category not found" });

    const { name } = req.body;
    category.name = name ?? category.name;
    res.json(category);
};

export const deleteCategory = (req, res) => {
    const index = categories.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Category not found" });

    categories.splice(index, 1);
    res.status(204).send();
};

export const getArticlesByCategory = (req, res) => {
    const id = parseInt(req.params.id);
    const category = categories.find(c => c.id === id);
    if (!category) return res.status(404).json({ message: "Category not found" });

    const result = articles.filter(a => a.categoryId === id);
    res.json(result);
};
