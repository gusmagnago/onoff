/* eslint-disable @typescript-eslint/no-explicit-any */

import './ShoppingList.scss';
import { useAppDispatch } from '../../redux/store';
import {
    IShoppingList,
    removeItem,
} from '../../redux/features/shoppingCartSlice';

interface IColumn {
    name: string;
    heading: string;
}

const ShoppingList = ({
    column,
    data,
    'data-test': dataTest = 'shopping-list',
}: {
    column: IColumn[];
    data: IShoppingList[];
    'data-test'?: string;
}) => {
    return (
        <table className="shopping-list" data-testid={dataTest}>
            <tbody>
                {data.map((item, index) => {
                    return <TableRow item={item} column={column} key={index} />;
                })}
            </tbody>
        </table>
    );
};

const TableRow = ({
    item,
    column,
}: {
    // type any because I couldnt find a better solution
    item: any;
    column: IColumn[];
}) => {
    const dispatch = useAppDispatch();

    return (
        <tr
            className="hopping-list shopping-list-row"
            data-testid="shopping-item"
        >
            {column.map((columnItem, index) => {
                return (
                    <td
                        key={`item-${index}`}
                        className="first-row"
                        data-testid={`item-${index}`}
                    >
                        {item[`${columnItem.name}`]}
                    </td>
                );
            })}
            <td
                key={`remove-${item.itemId}`}
                className="action-row"
                data-testid="delete-bttn"
            >
                <button
                    onClick={() => dispatch(removeItem({ id: item.itemId }))}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

export default ShoppingList;
