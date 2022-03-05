import React from "react";
import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import Produtos from "../Produtos/Produtos";
import Produto from "../Produto/Produto";
import Categorias from "../Categorias/Categorias"

function Main(props) {
        return (
            <>
                <header>
                    <Categorias/>
                </header>
                <main>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Produtos/>}/>
                            <Route path="/produto" element={<Produto/>}/>
                        </Routes>
                    </Router>
                </main>
                <footer>
                    Developed by <a href="https://www.github.com/xnths" target="_blank">Xnths</a>
                </footer>
            </>
        )
}

export default Main;