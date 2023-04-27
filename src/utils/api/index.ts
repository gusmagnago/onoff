import { IShop } from './types';

const URL = '/shops.json';

export const fetchShops = async (): Promise<IShop[]> => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
};
