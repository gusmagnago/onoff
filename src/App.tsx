import { ChangeEvent, MouseEvent, useState } from 'react';
import Input from './components/input/Input';
import ShoppingCartHeader from './components/shopping-cart-header/ShoppingCartHeader';
import Select from './components/select/Select';

import { useQuery } from 'react-query';
import { IShop } from './utils/api/types';
import { fetchShops } from './utils/api';

const App = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const [placeholder, setPlaceholder] = useState<string>('Select shop');

  const { data, isLoading } = useQuery<IShop[]>('stores', fetchShops);

  const isInputEmpty =
    typeof inputValue === 'string' && inputValue.length === 0;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSelectShop = (e: MouseEvent<HTMLUListElement>) => {
    setPlaceholder((e.target as HTMLUListElement).innerText);
    setOpen(!open);
  };

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
          </>
        }
      />
    </div>
  );
};

export default App;
