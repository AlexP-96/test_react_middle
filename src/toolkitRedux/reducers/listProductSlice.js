import { createSlice } from '@reduxjs/toolkit';

const listProductSlice = createSlice({
    name: 'listProduct',
    initialState: {
        isLoading: true,
        data: [],
    },
    reducers: {
        isLoadingListProduct(state, action) {
            state.isLoading = action.payload;
        },
        addToStateListProducts(state, action) {
            state.data = action.payload;
        },
    },
});

export default listProductSlice.reducer;

export const {
    isLoadingListProduct,
    addToStateListProducts,
} = listProductSlice.actions;