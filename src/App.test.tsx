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
        expect(screen.getByTestId('cart-header')).toBeInTheDocument();
    });
});
