import React, {Component} from "react";
import api from './api.js';

function getPreco(preco) {
    const precoFormatado = `R$ ${Number.parseFloat(preco).toFixed(2)}`;
    return precoFormatado;
}

class Produtos extends Component {
    render() {
        const produtos = api.retorno.produtos

        return (
                produtos.map((value, index) => {
                    const produto = value.produto;

                    return (
                        <ul key={produto.codigo}>
                            <li>{produto.descricao}</li>
                            <li>{produto.tipo}</li>
                            <li>{getPreco(produto.preco)}</li>
                        </ul>
                    )
                })
        )
    }
}

export default Produtos;