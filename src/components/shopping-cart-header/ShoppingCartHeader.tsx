import { ReactNode } from 'react';
import './ShoppingCartHeader.scss';

const ShoppingCartHeader = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className='wrapper'>
      <h1>{title}</h1>
      <div className='child-wrapper'>{children}</div>
    </div>
  );
};

export default ShoppingCartHeader;
