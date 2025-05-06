const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('baianosound', 'baianosound_user', 'oCs0Q1YPj1O8KoNVI6Zdtmrm9NNGnFvl', {
  host: 'dpg-d0cigdumcj7s73ak5pd0-a.ohio-postgres.render.com',
  dialect: 'postgres',
  port: 5432, // Porta do PostgreSQL
  logging: false, // Opcional: Desativar logs SQL
});

// Testar a conexão
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
      host: process.env.DB_HOST,
      dialect: 'postgres',
      port: process.env.DB_PORT,
    }
  );
  