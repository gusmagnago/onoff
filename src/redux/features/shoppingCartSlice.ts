import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { fetchShops } from '../../utils/api';



export interface IShoppingList {
    itemId?: string;
    itemName: string;
    shopName: string;

}

interface ShoppingItems {
    items: IShoppingList[];
    shopList: IShop[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null | unknown;
}
export interface IShop {
    id: string;
    name: string;
    sortOrder: number;
}


const initialState: ShoppingItems = {
    items: [],
    shopList: [],
    status: 'idle',
    error: null,

};

export const fetchShopList = createAsyncThunk('json/fetchData', async () => {
    const data = await fetchShops();
    return data

})

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
    extraReducers: (builder) => {
        builder
            .addCase(fetchShopList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchShopList.fulfilled, (state, action: PayloadAction<IShop[]>) => {
                state.status = 'succeeded';
                state.shopList = action.payload
            }).addCase(fetchShopList.rejected, (state, action: PayloadAction<string | null | unknown>) => {
                state.status = 'failed';
                state.error = action.payload;
            })
    },


});

export default ShoppingCartSlice.reducer;
export const { addItem, removeItem } = ShoppingCartSlice.actions;
