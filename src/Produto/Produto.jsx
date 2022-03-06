import React, { Component } from "react";
import produtosApi from "../produtos";


function getCodigoProduto() {
    let urlParams = global.window.location.search
    let codigoProduto = new URLSearchParams(urlParams).get('cod')
    return codigoProduto;
}

class Produto extends Component {
    constructor(props) {
        super(props);
        this.state = {produto: {
            imagem: [],
            descricao: '',
            categoria: [],
            preco: '',
            descricaoComplementar: '',
        }}
    }
    
    mostraProduto(){
        produtosApi.retorno.produtos.forEach(value => {
            if(value.produto.codigo === getCodigoProduto()) {
                let produto = value.produto
                this.setState({
                    produto: {
                        imagem: [...produto.imagem.map(value => value.link)],
                        descricao: produto.descricao,
                        categoria: [...produto.produtoLoja.categoria.map(value => value.descricao)],
                        preco: produto.preco,
                        descricaoComplementar: produto.descricaoComplementar
                    }
                })
            }
        });
    }

    componentDidMount() {
        this.mostraProduto();
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <img src={this.state.produto.imagem}/>
                <h2>{this.state.produto.descricao}</h2>
                <p>{this.state.produto.categoria[0]}</p>
                <p>{this.state.produto.preco}</p>
                <p>{this.state.produto.descricaoComplementar}</p>
                <button>Adicionar ao carrinho</button>
            </div>
        )
    }
}


export default Produto;
