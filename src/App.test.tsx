import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

import { store } from './redux/store';
import { Provider } from 'react-redux';

describe('<App />', () => {
    it('Should render the title of the app', async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        const shoppingHeader = screen.getByTestId('cart-header');
        const shoppingList = screen.getByTestId('shopping-list');

        await waitFor(() => {
            expect(shoppingHeader).toBeInTheDocument();
            expect(shoppingList).toBeInTheDocument();
        });
    });
});
