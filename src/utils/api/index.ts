import { IShop } from './types';

export const fetchShops = async (): Promise<IShop[]> => {
    const response = await fetch('/shops.json');
    const data = await response.json();
    return data;
};
