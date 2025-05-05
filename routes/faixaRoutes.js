const express = require('express');
const router = express.Router();
const faixaController = require('../controllers/faixaController');

// listar todos os faixas
router.get('/', faixaController.getAllFaixas);

// criar um novo faixa
router.post('/', faixaController.addFaixa);

// mostrar uma faixa especifica
router.get('/:id', faixaController.getFaixaById);

// exibir o formulário de edição de uma faixa específica
router.get('/:id/edit', faixaController.renderEditFaixaForm);

// atualizar um faixa
router.post('/:id/edit', faixaController.updateFaixa);

// deletar um faixa
router.post('/:id', faixaController.deleteFaixa);

module.exports = router;
