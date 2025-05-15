// app.js

require('dotenv').config(); // Carrega variáveis do .env
const express = require('express');
const path = require('path');
const app = express();
const sequelize = require('./config/database');
const methodOverride = require('method-override');

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Rotas
const homeRoutes = require('./routes/homeRoutes');
const artistaRoutes = require('./routes/artistaRoutes');
const discoRoutes = require('./routes/discoRoutes');
const faixaRoutes = require('./routes/faixaRoutes');
const generoRoutes = require('./routes/generoRoutes');
const vincularArtistaRoutes = require('./routes/vincularArtistaRoutes');

app.use('/', homeRoutes);
app.use('/artistas', artistaRoutes);
app.use('/discos', discoRoutes);
app.use('/faixas', faixaRoutes);
app.use('/generos', generoRoutes);
app.use('/vincular-artista', vincularArtistaRoutes);

// Arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Rota 404
app.use((req, res, next) => {
  res.status(404).send('Página não encontrada!');
});

// Teste de conexão com o banco de dados
sequelize.authenticate()
  .then(() => console.log('✅ Conexão com o banco de dados estabelecida!'))
  .catch(error => console.error('❌ Erro ao conectar ao banco:', error));

// Inicialização do servidor
const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }) // Sincronização do Sequelize
  .then(() => {
    app.listen(PORT, () => {
      console.log('🚀 Servidor rodando na porta http://localhost: ',PORT);
    });
  })
  .catch(err => {
    console.error('❌ Erro ao sincronizar o banco de dados:', err);
  });