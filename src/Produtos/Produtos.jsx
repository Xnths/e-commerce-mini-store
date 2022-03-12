import React, { Component } from "react";
import { ComprasContext } from "../Context/ComprasContext";
import getPreco from "../Helper/getPreco";
import produtosApi from '../produtos';

class Produtos extends Component {
    constructor(props) {
        super(props);
        this.produtos = produtosApi.retorno.produtos;
        this.state = {produto: ''}
    }

    adicionarAoCarrinho(produto){
        this.props.adicionaAoCarrinho();
        this.context.unidadesCompradas++;
        console.log(this.context.produtosComprados)
        this.context.produtosComprados.push(produto);
    }
    
    render() {
        return (
            <div>
                {this.produtos.map((value, index) => {
                    const produto = value.produto;
                        return (
                            <ul key={produto.codigo}>
                                <li className="produto__descricao">{produto.descricao}</li>
                                <li className="produto__tipo">{produto.produtoLoja.categoria.map(value => value.descricao.concat(" | "))}</li>
                                <li className="produto__preco">{getPreco(produto.preco)}</li>
                                <button className="produto__button" onClick={this.adicionarAoCarrinho.bind(this, produto)}>Adicionar ao Carrinho</button>
                            </ul>
                        )
                })}
            </div>
        )
    }
}

Produtos.contextType = ComprasContext;

export default Produtos;