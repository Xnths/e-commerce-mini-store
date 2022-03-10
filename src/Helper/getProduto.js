function getProduto (listaProduto, codigo) {
    const produtos = listaProduto.retorno.produtos
    
    for(let i = 0; i < produtos.length; i++){
        const produto = produtos[i].produto
        if(produto.codigo === codigo.toString()) {
            return produto;
        }
    }
}

export default getProduto;