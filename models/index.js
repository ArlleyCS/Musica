'use strict';

const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const process = require('process');
require('dotenv').config(); // Certifique-se de carregar as variáveis do .env

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

const db = {};

let sequelize;

if (process.env.DATABASE_URL) {
  // Ambiente de produção (ex: Render)
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Necessário para o Render
      }
    },
    logging: false,
  });
} else {
  // Ambiente local
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || 5432,
      dialect: process.env.DB_DIALECT || 'postgres',
      logging: false,
    }
  );
}

// Carrega todos os modelos automaticamente
fs.readdirSync(__dirname)
  .filter(file =>
    file.indexOf('.') !== 0 &&
    file !== basename &&
    file.slice(-3) === '.js' &&
    file.indexOf('.test.js') === -1
  )
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Executa as associações (se houver)
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
