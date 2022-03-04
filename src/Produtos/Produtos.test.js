import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import Produtos from './Produtos.jsx';
import produtosApi from "../../public/api/produtos"
import { createMemoryHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';
import Produto from '../Produto/Produto.jsx';

const quantidadeDeProdutos = produtosApi.retorno.produtos.length;

describe('Mostrar a lista de produtos', () => {
    it('Mostrar todos os produtos contidos na api', () => {
        const {container} = render(<Produtos/>);
        
        let produtosMostrados = 0;

        container.querySelectorAll('.produto__container').forEach(() => produtosMostrados++)
        expect(produtosMostrados).toBe(quantidadeDeProdutos)
    })
    it('Mostra preço do produto com duas casas decimais', () => {
        const { container } = render(<Produtos/>);
        container.querySelectorAll('.produto__preco').forEach(produto => {
            expect(produto.innerHTML).toMatch(/R\$ \d+\.\d{2}/gm);
        })
    })
})

describe('Ao clicar em um produto', () => {
    it('elemento aparece na tela', () => {
        let elementoTeste = 0;
        
        const { container } = render(<Produtos/>);
        const listaProdutos = container.querySelectorAll('.produto__container');
        
        expect(listaProdutos.length).toBe(quantidadeDeProdutos);
        
        const leftClick = {button: 0};
        userEvent.click(listaProdutos[elementoTeste], leftClick)
        
        expect(screen.getByText(produtosApi.retorno.produtos[elementoTeste].produto.descricao))
    })
    it('o usuário é direcionado para a página do produto', () => {
        const history = createMemoryHistory();
        const route = '/produto';
        history.push(route);

        render(
            <Router history={history}>
                <Produto/>
            </Router>
            )

        expect(window.location.href).toHaveTextContent(route);
    })
})