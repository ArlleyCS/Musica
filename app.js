const sequelize = require('./config/sequelize'); // ajuste o caminho se necessário

// Teste a conexão com o banco (opcional se já feito no sequelize.js)
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });
