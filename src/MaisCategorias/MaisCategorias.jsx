import React from "react"
import categoriasApi from "../categorias";

function MaisCategorias (props) {
    return (
        <ul>
            {categoriasApi.retorno.categorias.map(value => <li key={value.categoria.id}>{value.categoria.descricao}</li>)}
        </ul>
    )
}

export default MaisCategorias;