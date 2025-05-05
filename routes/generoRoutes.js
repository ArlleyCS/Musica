const express = require('express');
const router = express.Router();
const generoController = require('../controllers/generoController');

// listar todos os generos
router.get('/', generoController.getAllGeneros);

// exibir o formulário de criação de um novo genero
router.get('/add', generoController.renderAddGeneroForm);

// criar um novo genero
router.post('/add', generoController.addGenero);

// exibir um genero específico
router.get('/:id', generoController.getGeneroById);

// exibir o formulário de edição de um genero específico
router.get('/:id/edit', generoController.renderEditGeneroForm);

// atualizar um genero
router.post('/:id/edit', generoController.updateGenero);

// deletar um genero
router.post('/:id', generoController.deleteGenero);

module.exports = router;
