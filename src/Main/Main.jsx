import React, { Component, useState } from "react";
import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import Produtos from "../Produtos/Produtos";
import Produto from "../Produto/Produto"

class Main extends Component {
    
    render () {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Produtos/>}/>
                    <Route path="/produto" element={<Produto/>}/>
                </Routes>
            </Router>
        )
    }
}

export default Main;