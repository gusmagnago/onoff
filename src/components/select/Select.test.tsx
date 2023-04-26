import {
    render,
    screen,
    cleanup,
    fireEvent,
    waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Select from './Select';

import mockedShops from '../../utils/api/shops.json';
import React from 'react';

afterEach(cleanup);

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));

describe('<Select />', () => {
    it('Should display a select dropdown in disable state', async () => {
        const handleClick = jest.fn();
        render(
            <Select
                placeholder={''}
                open={false}
                shopNameList={undefined}
                isLoading={false}
                onClick={handleClick}
                onSelect={jest.fn()}
            />
        );

        const selectDropdown = screen.getByTestId('select-shop');

        await userEvent.click(selectDropdown);
        expect(handleClick).not.toHaveBeenCalled();
    });
    it('Should display a list of shops by clicking it', async () => {
        const handleClick = jest.fn();
        const setState = jest.fn();

        const open: boolean = false || true;

        jest.spyOn(React, 'useState').mockImplementation((useState?: false) => [
            useState,
            setState,
        ]);

        const wrapperProps = {
            placeholder: '',
            shopNameList: mockedShops,
            onSelect: jest.fn(),
            isLoading: false,
            disabled: false,
            onClick: handleClick,
            open: open,
        };
        render(<Select {...wrapperProps} />);
        const select = screen.getByTestId('select-button');
        const shopList = screen.getByTestId('shop-list');

        await fireEvent.click(select);

        expect(handleClick).toHaveBeenCalled();
        expect(setState).toBeTruthy();

        const selectDropdown = await waitFor(() => shopList, {
            timeout: 2000,
        });

        expect(selectDropdown).toBeInTheDocument();
    });

    it('Should be able to select one of the dropdown list options', async () => {
        const selectShop = jest.fn();

        const wrapperProps = {
            placeholder: '',
            shopNameList: mockedShops,
            onSelect: selectShop,
            isLoading: false,
            disabled: false,
            onClick: jest.fn(),
            open: true,
        };

        render(<Select {...wrapperProps} />);

        const shopList = screen.getByTestId('shop-list');
        const shop = screen.getByTestId('shop-Rimi');

        expect(shopList).toBeInTheDocument();

        await fireEvent.click(shop);

        expect(selectShop).toHaveBeenCalled();
    });
});
