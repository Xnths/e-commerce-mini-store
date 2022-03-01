import '@testing-library/jest-dom'
import {render} from '@testing-library/react';
import Produtos from './Produtos';

describe('Mostrar produtos', () => {
    it('mostra o primeiro produto', () => {
        const { getByText } = render(<Produtos/>);
        expect(getByText('Caneta azul')).toBeInTheDocument();
    })
    it('Mostra número decimal com duas casas', () => {
        const {getAllByText} = render(<Produtos/>);
        expect(getAllByText('R$ 1.00', {exact: true}).map(element => element.innerHTML === "R$ 1.00"));
    })
})
