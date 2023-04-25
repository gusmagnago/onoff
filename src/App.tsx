import { ChangeEvent, useState } from 'react';
import Input from './components/input/Input';
import ShoppingCartHeader from './components/shopping-cart-header/ShoppingCartHeader';

const App = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='shopping-cart-wrapper'>
      <ShoppingCartHeader
        title={'Add to cart:'}
        children={
          <Input value={inputValue} onChange={(e) => handleInputChange(e)} />
        }
      />
    </div>
  );
};

export default App;
