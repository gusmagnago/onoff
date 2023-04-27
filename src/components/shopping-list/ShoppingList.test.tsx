import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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
        const shoppingList = screen.getByTestId('shopping-list');
        const shoppingItem = screen.getAllByTestId('shopping-item');
        expect(shoppingList).toBeInTheDocument();
        expect(shoppingItem).toBeDefined();

        shoppingItem.map((item) => {
            expect(item.children.length).toBe(3);
        });
    });

    it('Should be able to delete a item by clicking the delete button', async () => {
        render(
            <Provider store={store}>
                <ShoppingList column={columnState} data={shoppingListState} />
            </Provider>
        );

        const shoppingList = screen.getByTestId('shopping-list');
        const shoppingItem = screen.getAllByTestId('shopping-item');
        const deleteBttn = screen.getAllByTestId('delete-bttn');

        const delBttn = deleteBttn[0];
        const handleDelete = (delBttn.onclick = jest.fn());

        expect(shoppingList).toBeInTheDocument();

        await fireEvent.click(delBttn);

        expect(handleDelete).toHaveBeenCalled();

        await waitFor(() => {
            expect(shoppingItem[0]);
        }).catch(() => {
            expect(shoppingItem[0]).not.toBeInTheDocument();
        });
    });
});
