const fs = require('fs');
const path = require('path');
const dbConfig = require('../config/dbConfig.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

const db = {};
db.sequelize = sequelize;

// Carrega todos os arquivos de modelo da pasta atual
fs.readdirSync(__dirname)
    .filter(file => file.endsWith('Model.js'))
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, DataTypes);
        const modelName = path.basename(file, '.js').replace('Model', '');
        db[modelName.toLowerCase()] = model;
    });

sequelize.authenticate()
    .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
    .catch(err => console.error('Não foi possível conectar ao banco de dados:', err));

db.sequelize.sync({ alter: true })
    .then(() => console.log('Sincronização com o banco de dados concluída.'))
    .catch(err => console.error('Erro ao sincronizar com o banco de dados:', err));

module.exports = db;
