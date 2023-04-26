import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IShoppingList {
    itemId: number;
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
                itemId: action.payload.itemId,
                itemName: action.payload.itemName,
                shopName: action.payload.shopName,
            });
        },
        removeItem: (state, action: PayloadAction<{ id: number }>) => {
            const removeItem = state.items.filter(
                (item) => item.itemId !== action.payload.id
            );
            state.items = removeItem;
        },
    },
});

export default ShoppingCartSlice.reducer;
export const { addItem, removeItem } = ShoppingCartSlice.actions;
