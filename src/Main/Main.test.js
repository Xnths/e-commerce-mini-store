import '@testing-library/jest-dom';
import {render} from '@testing-library/react'
import Main from './Main';

test('render hello world', () => {
    const { getByText} = render(<Main/>)
    expect(getByText('Mini Store')).toBeInTheDocument();
})