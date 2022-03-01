import '@testing-library/jest-dom'
import {render} from '@testing-library/react';
import Produtos from './Produtos.jsx';
import produtosApi from "../../public/api/produtos"


describe('Mostrar produtos', () => {
    it('Mostrar todos os produtos contidos na api', () => {
        const {container} = render(<Produtos/>);
        
        let produtosMostrados = 0;
        const quantidadeDeProdutos = produtosApi.retorno.produtos.length;

        container.querySelectorAll('.produto__container').forEach(() => produtosMostrados++)
        expect(produtosMostrados).toBe(quantidadeDeProdutos)
    })
    it('Mostra número decimal com duas casas', () => {
        const { container } = render(<Produtos/>);
        container.querySelectorAll('.produto__preco').forEach(produto => {
            expect(produto.innerHTML).toMatch(/R\$ \d+\.\d{2}/gm);
        })
    })
})
