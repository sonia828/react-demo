import {render, screen} from '@testing-library/react';

import Title from './Title';

test('H1 in the document', ()=> {
    render(<Title />)
})