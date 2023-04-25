/* eslint-disable @typescript-eslint/no-explicit-any */

import { MouseEventHandler } from 'react';
import './ShoppingList.scss';

interface IColumn {
  name: string;
  heading: string;
}

interface IData {
  itemName: string;
  shopName: string;
  itemId: number;
}

const ShoppingList = ({
  column,
  data,
  onRemoveItem,
}: {
  column: IColumn[];
  data: IData[];
  onRemoveItem: () => void;
}) => {
  return (
    <table className='shopping-list'>
      <tbody>
        {data.map((item, index) => {
          return (
            <TableRow
              item={item}
              column={column}
              key={index}
              onRemoveItem={onRemoveItem}
            />
          );
        })}
      </tbody>
    </table>
  );
};

const TableRow = ({
  item,
  column,
  onRemoveItem,
}: {
  // type any because I couldnt find a better solution
  item: any;
  column: IColumn[];
  onRemoveItem: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <tr className='hopping-list shopping-list-row'>
      {column.map((columnItem, index) => {
        return (
          <td key={`item-${index}`} className='first-row'>
            {item[`${columnItem.name}`]}
          </td>
        );
      })}
      <td key={`remove-${item.itemId}`} className='action-row'>
        <button onClick={onRemoveItem}>delete</button>
      </td>
    </tr>
  );
};

export default ShoppingList;
