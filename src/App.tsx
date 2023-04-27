import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import Input from './components/input/Input';
import ShoppingCartHeader from './components/shopping-cart-header/ShoppingCartHeader';
import Select from './components/select/Select';

import ShoppingList from './components/shopping-list/ShoppingList';
import { useAppDispatch, useAppSelector } from './redux/store';
import { addItem, fetchShopList } from './redux/features/shoppingCartSlice';

const App = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const selectPlaceholder = 'Select shop';
    const [placeholder, setPlaceholder] = useState<string>(selectPlaceholder);

    const dispatch = useAppDispatch();

    const { shopList, items, status, error } = useAppSelector((state) => state);

    const isInputEmpty =
        typeof inputValue === 'string' && inputValue.length === 0;

    const isSelectEmpty = placeholder === selectPlaceholder;

    useEffect(() => {
        dispatch(fetchShopList());
    }, [dispatch]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSelectShop = (e: MouseEvent<HTMLUListElement>) => {
        setPlaceholder((e.target as HTMLUListElement).innerText);
        setOpen(!open);
    };

    const handleAddItem = () => {
        dispatch(
            addItem({
                itemName: inputValue,
                shopName: placeholder,
            })
        );
        setInputValue('');
        setPlaceholder(selectPlaceholder);
    };

    const column = [
        { name: 'itemName', heading: 'itemName' },
        { name: 'shopName', heading: 'shopName' },
    ];

    return (
        <div className="shopping-cart-wrapper">
            <ShoppingCartHeader
                title={'Add to cart:'}
                children={
                    <>
                        <Input
                            value={inputValue}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <Select
                            placeholder={placeholder}
                            open={open}
                            shopNameList={shopList}
                            onClick={() => setOpen(!open)}
                            onSelect={(e) => handleSelectShop(e)}
                            disabled={isInputEmpty}
                            isLoading={status === 'loading'}
                        />
                        <button
                            className="add-bttn"
                            onClick={handleAddItem}
                            disabled={isInputEmpty || isSelectEmpty}
                        >
                            Add
                        </button>
                    </>
                }
            />
            {items && !error ? (
                <ShoppingList column={column} data={items} />
            ) : null}
        </div>
    );
};

export default App;
