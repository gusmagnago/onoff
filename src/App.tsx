import { ChangeEvent, MouseEvent, useState } from 'react';
import Input from './components/input/Input';
import ShoppingCartHeader from './components/shopping-cart-header/ShoppingCartHeader';
import Select from './components/select/Select';

import { useQuery } from 'react-query';
import { IShop } from './utils/api/types';
import { fetchShops } from './utils/api';
import ShoppingList from './components/shopping-list/ShoppingList';
import { useAppDispatch, useAppSelector } from './redux/store';
import { addItem, removeItem } from './redux/features/shoppingCartSlice';

const App = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const selectPlaceholder = 'Select shop';
  const [placeholder, setPlaceholder] = useState<string>(selectPlaceholder);
  const [id, setId] = useState<number>(0);
  const { data, isLoading } = useQuery<IShop[]>('stores', fetchShops);

  const dispatch = useAppDispatch();

  const isInputEmpty =
    typeof inputValue === 'string' && inputValue.length === 0;

  const isSelectEmpty = placeholder === selectPlaceholder;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSelectShop = (e: MouseEvent<HTMLUListElement>) => {
    setPlaceholder((e.target as HTMLUListElement).innerText);
    setOpen(!open);
  };

  const handleRemoveItem = () => {
    dispatch(removeItem({ id }));
  };

  const handleAddItem = () => {
    setId((prev) => prev + 1);
    dispatch(
      addItem({
        itemId: id,
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

  const shoppingList = useAppSelector((state) => state.items);

  return (
    <div className='shopping-cart-wrapper'>
      <ShoppingCartHeader
        title={'Add to cart:'}
        children={
          <>
            <Input value={inputValue} onChange={(e) => handleInputChange(e)} />
            <Select
              placeholder={placeholder}
              open={open}
              shopNameList={data && data}
              onClick={() => setOpen(!open)}
              onSelect={(e) => handleSelectShop(e)}
              disabled={isInputEmpty}
              isLoading={isLoading}
            />
            <button
              className='add-bttn'
              onClick={handleAddItem}
              disabled={isSelectEmpty}
            >
              Add
            </button>
          </>
        }
      />
      <ShoppingList
        column={column}
        data={shoppingList}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default App;
