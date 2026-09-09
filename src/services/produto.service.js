const produtos = [
    {
        id: 1,
        nome: 'Notebook',
        preco: 6700
    },
    {
        id: 2,
        nome: 'Mouse',
        preco: 120
    }
];

function listar() {
    return produtos;
}

function buscarPorId(id) {
    return produtos.find(produto => produto.id === id);
}

function criar(produto) {
    const novoProduto = {
        id: produtos.length + 1,
        nome: produto.nome,
        preco: produto.preco
    };

    produtos.push(novoProduto);

    return novoProduto;
}

module.exports = {
    listar,
    buscarPorId,
    criar
};