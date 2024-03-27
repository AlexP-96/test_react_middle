import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: true,
        nameProduct: '',
        idColor: null,
        countImage: 0,
        selectSize: null,
        dataColor: {},
        data: [],
    },
    reducers: {
        addToStateProduct(state, action) {
            state.data = [action.payload];
        },
        isLoadingProduct(state, action) {
            state.isLoading = action.payload;
        },
        addToStateColorProduct(state, action) {
            state.dataColor = action.payload;
        },
        currentNameProduct(state, action) {
            state.nameProduct = action.payload.name;
        },
        currentIdColorProduct(state, action) {
            state.idColor = action.payload;
        },
        currentSelectSize(state, action) {
            state.selectSize = action.payload;
        },
        nextCountVisibleImageProduct(state, action) {
            state.countImage = action.payload === undefined
                ? state.countImage + 1
                : 0;
        },
        prevCountVisibleImageProduct(state, action) {
            state.countImage = action.payload === undefined
                ? state.countImage - 1
                : action.payload;
        },
    },
});

export default productSlice.reducer;

export const {
    addToStateProduct,
    addToStateColorProduct,
    currentIdColorProduct,
    currentNameProduct,
    isLoadingProduct,
    currentSelectSize,
    nextCountVisibleImageProduct,
    prevCountVisibleImageProduct,
} = productSlice.actions;