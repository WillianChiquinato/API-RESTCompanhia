const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    create: (model, modelName) => async (req, res) => {
        try {
            const newItem = await model.create({ data: req.body });
            res.status(201).json(newItem);
        } catch (error) {
            res.status(500).json({ message: `Erro ao criar ${modelName}`, error });
        }
    },

    getAll: (model, modelName) => async (_req, res) => {
        try {
            const results = await model.findMany();
            res.status(200).json(results);
        } catch (error) {
            res.status(500).json({ message: `Erro ao listar ${modelName}`, error });
        }
    },

    getById: (model, modelName, primaryKey, type) => async (req, res) => {
        try {
            const id = type === 'int' ? parseInt(req.params.id) : req.params.id;

            if (type === 'int' && isNaN(id)) {
                return res.status(400).json({ message: `ID inválido fornecido para ${modelName}` });
            }
            
            const item = await model.findUnique({ where: { [primaryKey]: id } });

            if (!item) return res.status(404).json({ message: `${modelName} não encontrado` });
            res.status(200).json(item);
        } catch (error) {
            res.status(500).json({ message: `Erro ao buscar ${modelName}`, error });
        }
    },

    update: (model, modelName, primaryKey, type) => async (req, res) => {
        try {
            const id = type === 'int' ? parseInt(req.params.id) : req.params.id;

            if (type === 'int' && isNaN(id)) {
                return res.status(400).json({ message: `ID inválido fornecido para ${modelName}` });
            }

            const updated = await model.update({
                where: { [primaryKey]: id },
                data: req.body,
            });

            res.status(200).json(updated);
        } catch (error) {
            res.status(500).json({ message: `Erro ao atualizar ${modelName}`, error });
        }
    },

    remove: (model, modelName, primaryKey, type) => async (req, res) => {
        try {
            const id = type === 'int' ? parseInt(req.params.id) : req.params.id;

            if (type === 'int' && isNaN(id)) {
                return res.status(400).json({ message: `ID inválido fornecido para ${modelName}` });
            }

            await model.delete({ where: { [primaryKey]: id } });

            res.status(200).json({ message: `${modelName} deletado com sucesso` });
        } catch (error) {
            res.status(500).json({ message: `Erro ao deletar ${modelName}`, error });
        }
    },
};
