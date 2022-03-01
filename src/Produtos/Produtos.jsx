import React, {Component} from "react";
import produtosApi from '../../public/api/produtos.js';

function getPreco(preco) {
    const precoFormatado = `R$ ${Number.parseFloat(preco).toFixed(2)}`;
    return precoFormatado;
}

class Produtos extends Component {
    render() {
        const produtos = produtosApi.retorno.produtos

        return (
                produtos.map((value, index) => {
                    const produto = value.produto;

                    return (
                        <ul className="produto__container container" key={produto.codigo}>
                            <li className="produto__descricao">{produto.descricao}</li>
                            <li className="produto__tipo">{produto.tipo}</li>
                            <li className="produto__preco">{getPreco(produto.preco)}</li>
                        </ul>
                    )
                })
        )
    }
}

export default Produtos;