const express = require('express');
const router = express.Router();
const artistaController = require('../controllers/artistaController');
const upload = require('../middlewares/upload');

// listar todos os artistas
router.get('/', artistaController.getAllArtistas);

// exibir o formulário de criação
router.get('/add', artistaController.renderAddArtistaForm);

// criar um novo artista
router.post('/add', upload.single('foto'), artistaController.addArtista);

// exibir um artista específico
router.get('/:id', artistaController.getArtistaById);

// exibir o formulário de edição de um artista específico
router.get('/:id/edit', artistaController.renderEditArtistaForm);

// atualizar nome e nacionalidade do artista
router.post('/:id/edit/dados', artistaController.updateDadosArtista);

// atualizar a foto do artista
router.post('/:id/edit/foto', upload.single('foto'), artistaController.updateFotoArtista);

// deletar um artista
router.post('/:id', artistaController.deleteArtista);

module.exports = router;
