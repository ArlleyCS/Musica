require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'baianosound',
  process.env.DB_USER || 'baianosound_user',
  process.env.DB_PASS || 'oCs0Q1YPj1O8KoNVI6Zdtmrm9NNGnFvl',
  {
    host: process.env.DB_HOST || 'dpg-d0cigdumcj7s73ak5pd0-a.ohio-postgres.render.com',
    port: 5432,
    dialect: 'postgres',
    logging: false,
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
