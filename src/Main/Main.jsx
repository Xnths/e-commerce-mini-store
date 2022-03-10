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
    }

    render() {
        return (
                <Router>
                    <header>
                        <ComprasContext.Provider value={this.context.unidadesCompradas}>
                            <StatusCarrinho/>
                        </ComprasContext.Provider>
                        <Categorias/>
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<Produtos/>}/>
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