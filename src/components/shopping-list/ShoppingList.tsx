/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode } from 'react';

import './ShoppingList.scss';

interface IColumn {
  name: string;
  heading: string;
}

interface IData {
  itemName: string;
  shopName: string;
  action: ReactNode;
}

const ShoppingList = ({
  column,
  data,
}: {
  column: IColumn[];
  data: IData[];
}) => {
  return (
    <table className='shopping-list'>
      <tbody>
        {data.map((item, index) => (
          <TableRow item={item} column={column} key={index} />
        ))}
      </tbody>
    </table>
  );
};

const TableRow = ({ item, column }: { item: any; column: IColumn[] }) => {
  // type any because I couldnt find a better solution
  return (
    <tr className='shopping-list-row'>
      {column.map((columnItem, index) => {
        return (
          <td key={index} className='first-row'>
            {item[`${columnItem.name}`]}
          </td>
        );
      })}
    </tr>
  );
};

export default ShoppingList;
