import { MouseEventHandler } from 'react';
import Arrow from '../icons/ArrowDown';

import './Select.scss';
import { IShop } from '../../utils/api/types';

const Select = ({
  placeholder,
  shopNameList,
  open,
  onClick,
  onSelect,
  disabled,
  isLoading,
}: {
  placeholder: string;
  open: boolean;
  shopNameList: IShop[] | undefined;
  isLoading: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  onSelect: MouseEventHandler<HTMLUListElement>;
  disabled: boolean;
}) => {
  const sortedShopNameList = shopNameList?.sort(
    (a, b) => a.sortOrder - b.sortOrder
  );

  if (!shopNameList || isLoading) {
    <span>Loading list...</span>;
  }

  return (
    <div>
      <button className='select' onClick={onClick} disabled={disabled}>
        <span>{placeholder}</span>
        <Arrow />
      </button>
      {open ? (
        <ul className='select-options' onClick={onSelect}>
          {sortedShopNameList?.map(({ name, sortOrder }) => (
            <li key={`${name}-${sortOrder}`}>{name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
