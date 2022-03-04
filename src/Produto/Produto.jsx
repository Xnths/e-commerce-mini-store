import { createBrowserHistory } from "history";
import React, {Component} from "react";
import {browserHistory } from "react-router-dom"

var codigoProduto = getCodigo(window.location.search);

function getCodigo(path) {
    var params = new URLSearchParams(path);
    return params.get('cod');
}

class Produto extends Component {
    render () {
        return (
            <div>
                <h2>{codigoProduto}</h2>
            </div>
        )
    }
}

export default Produto;
