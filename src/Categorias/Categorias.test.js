import '@testing-library/jest-dom';
import {render} from '@testing-library/react'
import Categorias from './Categorias';

import categorias from "../../public/api/categorias"

describe('Mostra as categorias principais', () => {
    it('Contêm todas as categorias registradas', () => {
        const {container} = render(<Categorias/>)

        let categoriasMostradas = 0;
        const quantidadeDeCategorias = categorias.retorno.categorias.length;

        container.querySelectorAll('.categorias__item').forEach(() => categoriasMostradas++);

        expect(categoriasMostradas).toBe(quantidadeDeCategorias);
    })
})