const config = require('./config.json'); // Ajuste o caminho se necessário
const { Sequelize } = require('sequelize');

// Crie uma instância do Sequelize com as configurações do arquivo config.json
const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  dialect: config.development.dialect,
  logging: config.development.logging,
});

// Teste a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });
