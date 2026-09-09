const service = require('../services/produto.service');

function listar(req, res) {
    const produtos = service.listar();

    res.status(200).json(produtos);
}

function buscarPorId(req, res) {
    const id = Number(req.params.id);

    const produto = service.buscarPorId(id);

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    res.status(200).json(produto);
}

function criar(req, res) {
    const { nome, preco } = req.body;

    if (!nome || preco === undefined) {
        return res.status(400).json({
            mensagem: 'Nome e preço são obrigatórios'
        });
    }

    if (preco <= 0) {
        return res.status(400).json({
            mensagem: 'O preço deve ser maior que zero'
        });
    }

    const novoProduto = service.criar({
        nome,
        preco
    });

    res.status(201).json(novoProduto);
}

module.exports = {
    listar,
    buscarPorId,
    criar
};