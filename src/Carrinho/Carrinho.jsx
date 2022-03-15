import React, { Component } from "react";
import {ComprasContext} from "../Context/ComprasContext";
import getPreco from "../Helper/getPreco";
import {logistica} from "../logistica";
import {Delete} from "@mui/icons-material"

class Carrinho extends Component {
    constructor(props){
        super(props);
        this.state = {
            compras: []
        }
    }

    removerDoCarrinho(compra){
        let compras = this.context.compras;
        let posicaoCompra = compras.indexOf(compra);
        this.context.unidadesCompradas -= compra.quantidade;
        
        compras.splice(posicaoCompra, 1);
        this.context.codigos.splice(this.context.codigos.indexOf(compra.produto.codigo), 1);

        this.props.removerDoCarrinho();
        this.setState({compras: compras});
    }

    componentDidMount(){
        this.setState({compras: this.context.compras});
    }

    render() {
        return (
            this.state.compras.map(compra => {
                const produto = compra.produto
                const servico = logistica.retorno.logisticas[0].logistica.servicos[0].servico
                return (
                        <ul key={produto.codigo}>
                            <li>{produto.descricao} ({compra.quantidade}x)</li>
                            <li>{getPreco(produto.preco)}</li>
                            <li>Frete: {getPreco(servico.frete_item)}</li>
                            <li>Total: {getPreco(Number(produto.preco) + Number(servico.frete_item))}</li>
                            <li>{servico.descricao}</li>
                            <li>Prazo: {servico.est_entrega}</li>
                            <Delete onClick={this.removerDoCarrinho.bind(this, compra)}/>
                        </ul>
                    )
                })
        )
    }
}

Carrinho.contextType = ComprasContext;

export default Carrinho;