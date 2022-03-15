import React, { Component } from "react";
import {ComprasContext} from "../Context/ComprasContext";
import getPreco from "../Helper/getPreco";
import getProduto from "../Helper/getProduto";
import produtosApi from "../produtos"

class Carrinho extends Component {
   
    render() {
        return (
            this.context.compras.map(compra => {
                const produto = compra.produto
                return (
                        <ul key={produto.codigo}>
                            <li>{produto.descricao} ({compra.quantidade}x)</li>
                            <li>{getPreco(produto.preco)}</li>
                        </ul>
                    )
                })
        )
    }
}

Carrinho.contextType = ComprasContext;

export default Carrinho;