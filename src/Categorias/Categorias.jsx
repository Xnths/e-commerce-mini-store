import React, {Component} from "react";
import { Link } from "react-router-dom";
import categoriasApi from "../categorias"

class Categorias extends Component {
    getCategorias() {
        const limite = categoriasApi.retorno.categorias.length;
        let element = [];

        for(let i = 0; i < limite; i++) {
            let categoria = categoriasApi.retorno.categorias[i].categoria;
            element.push(<li key={categoria.id}>{categoria.descricao}</li>)
        }

        element.push(<li key={"ver-mais"}><Link to="/categorias">Ver mais categorias</Link></li>)

        return element
    }
    render() {
        return (
            <nav className="categorias__navegacao">
                <ul className="categorias__container">
                    {this.getCategorias()}
                </ul>
            </nav>
        )
    }
}

export default Categorias;