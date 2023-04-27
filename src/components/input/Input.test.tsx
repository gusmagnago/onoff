import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

afterEach(cleanup);

describe('<Input/>', () => {
    it('Should display a input element with empty state', () => {
        const { getByTestId } = render(<Input onChange={jest.fn} />);
        const input = getByTestId('input');

        expect(input).toBeInTheDocument();
        expect(input.innerText).toBeUndefined();
    });

    it('Should change the value by user typing', async () => {
        const handleChange = jest.fn();
        render(<Input onChange={handleChange} />);

        const input = screen.getByTestId('input') as HTMLInputElement;
        const inputValue = 'Item 1';

        await userEvent.type(input, inputValue);

        expect(handleChange).toHaveBeenCalled();
        expect(input.value).toBe(inputValue);
    });
});
