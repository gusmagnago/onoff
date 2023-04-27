import { render, screen } from '@testing-library/react';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './redux/store';
import { Provider } from 'react-redux';

describe('<App />', () => {
    it('Should render the title of the app', () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <App />
                </Provider>
            </QueryClientProvider>
        );

        const shoppingHeader = screen.getByTestId('cart-header');
        const shoppingList = screen.getByTestId('shopping-list');

        expect(shoppingHeader).toBeInTheDocument();
        expect(shoppingList).toBeInTheDocument();
    });
});
