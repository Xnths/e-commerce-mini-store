import React, { Component } from "react";
import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import Produtos from "../Produtos/Produtos";
import Categorias from "../Categorias/Categorias";
import MaisCategorias from "../MaisCategorias/MaisCategorias";
import StatusCarrinho from "../StatusCarrinho/StatusCarrinho";
import Carrinho from "../Carrinho/Carrinho";
import { ComprasContext } from "../Context/ComprasContext";

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            unidadesCompradas: 0,
            produtosComprados: []
        }
        this.child = React.createRef();
    }

    adicionaAoCarrinho() {
        this.child.current.atualizaCarrinho();
    }

    render() {
        return (
                <Router>
                    <header>
                        <StatusCarrinho ref={this.child}/>
                        <Categorias/>
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<Produtos adicionaAoCarrinho={this.adicionaAoCarrinho.bind(this)}/>}/>
                            <Route path="/categorias" element={<MaisCategorias/>}/>
                            <Route path="/carrinho" element={<Carrinho/>}/>
                        </Routes>
                    </main>
                    <footer>
                        Developed by <a href="https://www.github.com/xnths" target="_blank">Xnths</a>
                    </footer>
                </Router>
            )
    }  
}

Main.contextType = ComprasContext;

export default Main;