import { journalists, articles } from '../models/data.js';

let nextJournalistId = journalists.length + 1;

export const getAllJournalists = (req, res) => {
    res.json(journalists);
};

export const getJournalistById = (req, res) => {
    const journalist = journalists.find(j => j.id === parseInt(req.params.id));
    if (!journalist) return res.status(404).json({ message: "Journalist not found" });
    res.json(journalist);
};

export const createJournalist = (req, res) => {
    const { name, email } = req.body;
    const newJournalist = { id: nextJournalistId++, name, email };
    journalists.push(newJournalist);
    res.status(201).json(newJournalist);
};

export const updateJournalist = (req, res) => {
    const journalist = journalists.find(j => j.id === parseInt(req.params.id));
    if (!journalist) return res.status(404).json({ message: "Journalist not found" });

    const { name, email } = req.body;
    journalist.name = name ?? journalist.name;
    journalist.email = email ?? journalist.email;

    res.json(journalist);
};

export const deleteJournalist = (req, res) => {
    const index = journalists.findIndex(j => j.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Journalist not found" });

    journalists.splice(index, 1);
    res.status(204).send();
};

export const getArticlesByJournalist = (req, res) => {
    const id = parseInt(req.params.id);
    const journalist = journalists.find(j => j.id === id);
    if (!journalist) return res.status(404).json({ message: "Journalist not found" });

    const result = articles.filter(a => a.journalistId === id);
    res.json(result);
};
