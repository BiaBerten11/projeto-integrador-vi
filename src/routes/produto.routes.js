const express = require('express');

const router = express.Router();

const controller = require('../controllers/produto.controller');

router.get('/produtos', controller.listar);

router.get('/produtos/:id', controller.buscarPorId);

router.post('/produtos', controller.criar);

module.exports = router;