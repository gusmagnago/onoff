import { render, screen } from '@testing-library/react';
import ShoppingCartHeader from './ShoppingCartHeader';

describe('<ShoppingCartHeader>', () => {
    it('Should display a title and its children', () => {
        render(
            <ShoppingCartHeader
                title={'Add to cart:'}
                children={
                    <div>
                        <input type="text" />
                    </div>
                }
            />
        );

        const shoppingHeader = screen.getByTestId('cart-header');
        const shoppingChild = screen.getByTestId('child-wrapper');

        expect(shoppingHeader).toBeInTheDocument();
        expect(shoppingChild.firstChild).toBeInTheDocument();
    });
});
