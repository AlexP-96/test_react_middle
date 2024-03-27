import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        isLoading: true,
        items: [],
        resultPrice: 0,
    },
    reducers: {
        addProductCart(state, action) {
            state.items.push(action.payload);
        },
        deleteProductCart(state, action) {
            state.items = state.items.filter((item, index) => index !== action.payload);
        },
        totalPriceCart(state, action) {
            state.resultPrice = action.payload;
        },
    },
});

export default cartSlice.reducer;

export const {
    addProductCart,
    deleteProductCart,
    totalPriceCart,
} = cartSlice.actions;