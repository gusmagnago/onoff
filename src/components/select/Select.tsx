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
    'data-test': dataTest = 'select-shop',
    'data-test-item': dataTestItem = 'shop-list',
}: {
    placeholder: string;
    open?: boolean;
    shopNameList: IShop[] | undefined;
    isLoading: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
    onSelect: MouseEventHandler<HTMLUListElement>;
    disabled?: boolean;
    'data-test'?: string;
    'data-test-item'?: string;
}) => {
    const sortedShopNameList = shopNameList?.sort(
        (a, b) => a.sortOrder - b.sortOrder
    );

    if (!shopNameList || isLoading) {
        <span>Loading list...</span>;
    }

    return (
        <div data-testid={dataTest}>
            <button
                className="select"
                onClick={onClick}
                disabled={disabled}
                data-testid="select-button"
            >
                <span>{placeholder}</span>
                <Arrow />
            </button>
            {open ? (
                <ul
                    className="select-options"
                    onClick={onSelect}
                    data-testid={dataTestItem}
                >
                    {sortedShopNameList?.map(({ name, sortOrder }) => (
                        <li
                            key={`${name}-${sortOrder}`}
                            data-testid={`shop-${name}`}
                        >
                            {name}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default Select;
