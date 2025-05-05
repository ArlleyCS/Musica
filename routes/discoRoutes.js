const express = require('express');
const router = express.Router();
const discoController = require('../controllers/discoController');
const upload = require('../middlewares/upload');

// listar todos os discos
router.get('/', discoController.getAllDiscos);

// exibir o formulário de criação de um novo disco
router.get('/add', discoController.renderAddDiscoForm);

// criar um novo disco
router.post('/add', upload.single('capa'), discoController.addDisco);

// exibir um disco específico
router.get('/:id', discoController.getDiscoById);

// exibir o formulário de edição de um disco específico
router.get('/:id/edit', discoController.renderEditDiscoForm);

// atualizar nome e ano do disco
router.post('/:id/edit/dados', discoController.updateNomeAnoDisco)

// atualizar a capa do disco
router.post('/:id/edit/capa', upload.single('capa'), discoController.updateCapa);

// deletar um disco
router.post('/:id', discoController.deleteDisco);

module.exports = router;
