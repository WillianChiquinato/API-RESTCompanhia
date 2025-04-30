const express = require('express');
const router = express.Router();
const GenericController = require('../controllers/GenericController');
const db = require('../models');

// Definindo rotas para todos os models dinamicamente
const models = Object.keys(db).filter(key => typeof db[key] === 'function');

models.forEach(modelName => {
    const primaryKey = `Id_${modelName.charAt(0).toUpperCase()}${modelName.slice(1)}`;

    const path = `/api/${modelName}`;

    router.post(`${path}`, GenericController.create(modelName));
    router.get(`${path}`, GenericController.getAll(modelName));
    router.get(`${path}/:id`, GenericController.getById(modelName, primaryKey));
    router.put(`${path}/:id`, GenericController.update(modelName, primaryKey));
    router.delete(`${path}/:id`, GenericController.remove(modelName, primaryKey));
});

module.exports = router;
