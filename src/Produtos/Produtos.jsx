import React, { Component } from "react";
import { ComprasContext } from "../Context/ComprasContext";
import getPreco from "../Helper/getPreco";
import produtosApi from '../produtos';

class Produtos extends Component {
    constructor(props) {
        super(props);
        this.produtos = produtosApi.retorno.produtos;
        this.state = {produtos: this.getProdutos()}
    }

    atualizaProdutos(){
        this.setState({produtos: this.getProdutos()})
    }

    getProdutos() {
        const searchParams = new URLSearchParams(window.location.search)
        let categoriaProcurada = searchParams.get('categoria');

        if(categoriaProcurada != null){
            return this.produtos.filter(value => {
                if(value.produto.produtoLoja.categoria.findIndex(categoria => categoria.descricao !== categoriaProcurada)){
                    console.log(value);
                    return value;
                }
            })
        }
        return this.produtos;
    }

    adicionarAoCarrinho(produto){
        this.context.unidadesCompradas++;

        const compras = this.context.compras;
        
        if(this.context.codigos.includes(produto.codigo)){
            compras.forEach(compra => {
                if(compra.produto.codigo === produto.codigo){   
                    compra.quantidade++;
                }
            })
        } else {
            this.context.codigos.push(produto.codigo);
            compras.push({
                produto: produto,
                quantidade: 1
            });
        }
        this.props.adicionaAoCarrinho();
    }
    
    render() {
        return (
            <div>
                {this.state.produtos.map((value, index) => {
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