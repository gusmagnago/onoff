import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

import ShoppingList from './ShoppingList';

import columnState from '../../utils/__fixtures__/columnState.json';
import shoppingListState from '../../utils/__fixtures__/shoppingListState.json';

describe('<ShoppingList>', () => {
    it('Should display list of items containing three columns', () => {
        render(
            <Provider store={store}>
                <ShoppingList column={columnState} data={shoppingListState} />
            </Provider>
        );
        screen.debug();

        const shoppingList = screen.getByTestId('shopping-list');
        const shoppingItem = screen.getAllByTestId('shopping-item');

        expect(shoppingList).toBeInTheDocument();
        expect(shoppingItem).toBeDefined();

        shoppingItem.map((item) => {
            expect(item.children.length).toBe(3);
        });
    });
});
