import React, { Component } from "react";
import { Link } from "react-router-dom";
import {ComprasContext} from "../Context/ComprasContext"


class StatusCompra extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unidadesCompradas: 0
        }
    }

    mostraCarrinho(context){
        return (
            <Link to="/carrinho">Carrinho: {context}</Link>
        )
    }

    render () {
        return (
            <ComprasContext.Consumer>
                {this.mostraCarrinho.bind(this, this.context)}
            </ComprasContext.Consumer>
        )
    }
}

StatusCompra.contextType = ComprasContext;

export default StatusCompra;