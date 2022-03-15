import React, { Component } from "react";
import { Link } from "react-router-dom";
import {ComprasContext} from "../Context/ComprasContext"


class StatusCarrinho extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unidadesCompradas: 0
        }
    }
    
    atualizaCarrinho(){
        this.setState({unidadesCompradas: this.context.unidadesCompradas})
    }

    render () {
        return (
            <Link to="/carrinho">Carrinho: {this.state.unidadesCompradas}</Link>
        )
    }
}

StatusCarrinho.contextType = ComprasContext;

export default StatusCarrinho;