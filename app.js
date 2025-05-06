const { Sequelize } = require('sequelize');
const config = require('./config.json');

// Use o ambiente de desenvolvimento
const env = 'development';
const dbConfig = config[env];

// Cria a instância do Sequelize
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging,
  }
);

// Testa a conexão
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso!');
  })
  .catch(err => {
    console.error('❌ Não foi possível conectar ao banco de dados:', err);
  });

module.exports = sequelize;
