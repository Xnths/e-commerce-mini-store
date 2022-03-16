import { Link } from "@mui/material";
import React from "react"
import categoriasApi from "../categorias";

function MaisCategorias (props) {
    return (
        <ul>
            {categoriasApi.retorno.categorias.map(value => <li key={value.categoria.id}><a href={"/search?categoria=".concat(value.categoria.descricao)}>{value.categoria.descricao}</a></li>)}
        </ul>
    )
}

export default MaisCategorias;