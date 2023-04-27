import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export interface IShoppingList {
    itemId?: string;
    itemName: string;
    shopName: string;
}

interface ShoppingItems {
    items: IShoppingList[];
}

const initialState: ShoppingItems = {
    items: [],
};

export const ShoppingCartSlice = createSlice({
    name: 'shoppingItem',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<IShoppingList>) => {
            state.items.push({
                itemId: uuid(),
                itemName: action.payload.itemName,
                shopName: action.payload.shopName,
            });
        },
        removeItem: (state, action: PayloadAction<{ id: string }>) => {
            const removeItem = state.items.filter(
                (item) => item.itemId !== action.payload.id
            );
            state.items = removeItem;
        },
    },
});

export default ShoppingCartSlice.reducer;
export const { addItem, removeItem } = ShoppingCartSlice.actions;
