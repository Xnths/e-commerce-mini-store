import React, {Component} from "react";
import categoriasApi from "../../public/api/categorias"

class Categorias extends Component {
    render() {
        return (
            <nav className="categorias__navegacao">
                <ul className="categorias__container">
                    {categoriasApi.retorno.categorias.map(value => {
                        let categoria = value.categoria;
                        return (
                            <li className="categorias__item" key={categoria.id}>{categoria.descricao}</li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Categorias;