const express = require('express');
const router = express.Router();
const GenericController = require('../controllers/GenericController');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Lista de modelos e chaves primárias
const models = [
    { name: 'adicionaisfuncionario', model: prisma.adicionaisfuncionario, pk: 'Id_AdicionaisFuncionario', type: 'int' },
    { name: 'bairro', model: prisma.bairro, pk: 'Id_Bairro', type: 'int' },
    { name: 'carro', model: prisma.carro, pk: 'Id_Carro', type: 'int' },
    { name: 'cep', model: prisma.cep, pk: 'Id_Cep', type: 'int' },
    { name: 'cidade', model: prisma.cidade, pk: 'Id_Cidade', type: 'int' },
    { name: 'despesa', model: prisma.despesa, pk: 'Id_Despesa', type: 'int' },
    { name: 'empresa', model: prisma.empresa, pk: 'Id_Empresa', type: 'string' },
    { name: 'endereco', model: prisma.endereco, pk: 'Id_Endereco', type: 'int' },
    { name: 'estado', model: prisma.estado, pk: 'Id_Estado', type: 'int' },
    { name: 'extrair', model: prisma.extrair, pk: 'Id_Extrair', type: 'int' },
    { name: 'funcionario', model: prisma.funcionario, pk: 'Id_Funcionario', type: 'string' },
    { name: 'indicador', model: prisma.indicador, pk: 'Id_Indicador', type: 'indicador' },
    { name: 'inicio', model: prisma.incio, pk: 'Id_Inicio', type: 'int' },
    { name: 'menu', model: prisma.menu, pk: 'Id_Menu', type: 'int' },
    { name: 'telefone', model: prisma.telefone, pk: 'Id_Telefone', type: 'int' },
    { name: 'tipocarro', model: prisma.tipocarro, pk: 'Id_TipoCarro', type: 'int' },
    { name: 'tipodespesa', model: prisma.tipodespesa, pk: 'Id_TipoDespesa', type: 'int' },
    { name: 'tipoendereco', model: prisma.tipoendereco, pk: 'Id_TipoEndereco', type: 'int' },
    { name: 'tipoindicador', model: prisma.tipoindicador, pk: 'Id_TipoIndicador', type: 'int' },
    { name: 'tipotelefone', model: prisma.tipotelefone, pk: 'Id_TipoTelefone', type: 'int' },
    { name: 'usuario', model: prisma.usuario, pk: 'id_Usuario', type: 'int' },
];

models.forEach(({ name, model, pk, type }) => {
    const path = `/api/${name}`;

    router.post(`${path}`, GenericController.create(model, name));
    router.get(`${path}`, GenericController.getAll(model, name));
    router.get(`${path}/:id`, GenericController.getById(model, name, pk, type));
    router.put(`${path}/:id`, GenericController.update(model, name, pk, type));
    router.delete(`${path}/:id`, GenericController.remove(model, name, pk, type));
});

module.exports = router;

