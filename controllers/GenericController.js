const db = require('../models');

module.exports = {
    create: (modelName) => async (req, res) => {
        try {
            const model = db[modelName];
            const newItem = await model.create(req.body);
            res.status(201).json(newItem);
        } catch (error) {
            res.status(500).json({ message: `Erro ao criar ${modelName}`, error });
        }
    },

    getAll: (modelName) => async (req, res) => {
        try {
            const model = db[modelName];
            const results = await model.findAll();
            res.status(200).json(results);
        } catch (error) {
            res.status(500).json({ message: `Erro ao listar ${modelName}`, error });
        }
    },

    //
    getById: (modelName, primaryKey) => async (req, res) => {
        try {
            const model = db[modelName];
            const item = await model.findByPk(req.params.id);
            if (!item) return res.status(404).json({ message: `\nModelo: ${modelName} não encontrado` });
            res.status(200).json(item);
        } catch (error) {
            res.status(500).json({ message: `Erro ao buscar ${modelName}`, error });
        }
    },

    update: (modelName, primaryKey) => async (req, res) => {
        try {
            const model = db[modelName];
            const [updated] = await model.update(req.body, {
                where: { [primaryKey]: req.params.id }
            });
            if (!updated) return res.status(404).json({ message: `${modelName} não encontrado` });
            res.status(200).json({ message: `${modelName} atualizado com sucesso` });
        } catch (error) {
            res.status(500).json({ message: `Erro ao atualizar ${modelName}`, error });
        }
    },

    remove: (modelName, primaryKey) => async (req, res) => {
        try {
            const model = db[modelName];
            const deleted = await model.destroy({
                where: { [primaryKey]: req.params.id }
            });
            if (!deleted) return res.status(404).json({ message: `${modelName} não encontrado` });
            res.status(200).json({ message: `${modelName} deletado com sucesso` });
        } catch (error) {
            res.status(500).json({ message: `Erro ao deletar ${modelName}`, error });
        }
    }
};