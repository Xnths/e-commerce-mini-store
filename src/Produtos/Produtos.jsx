import React from "react";
import produtosApi from '../produtos';
import { Link } from 'react-router-dom';

function getPreco(preco) {
    const precoFormatado = `R$ ${Number.parseFloat(preco).toFixed(2)}`;
    return precoFormatado;
}


function Produtos(props) {
    const produtos = produtosApi.retorno.produtos;
    
    return (
        <div>
            {produtos.map((value, index) => {
                const produto = value.produto;
                const link = `/produto?cod=${produto.codigo}`

                    return (
                        <Link to={link} className="produto__container container" key={index}>
                            <li className="produto__descricao">{produto.descricao}</li>
                            <li className="produto__tipo">{produto.produtoLoja.categoria.map(value => value.descricao.concat(" | "))}</li>
                            <li className="produto__preco">{getPreco(produto.preco)}</li>
                        </Link>
                    )
            })}
        </div>
    )
}

export default Produtos;