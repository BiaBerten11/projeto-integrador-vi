const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const produtoRoutes = require('./src/routes/produto.routes');

app.use(produtoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor ativo na porta ${PORT}`);
});