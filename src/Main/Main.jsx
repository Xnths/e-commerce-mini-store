import React, { Component } from "react";
import Router from "react-router-dom";
import Produtos from "../Produtos/Produtos";

class Main extends Component {
    render () {
        return (
            <body>
                    <Produtos/>
            </body>
        )
    }
}

export default Main;