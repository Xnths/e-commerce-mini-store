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
                <h2>{this.state.produto.categoria}</h2>
            </div>
        )
    }
}


export default Produto;
