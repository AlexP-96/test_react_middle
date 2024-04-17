import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import {
    IProductState,
} from '../../types';

const initialState: IProductState = {
    isLoading: true,
    nameProduct: '',
    idColor: null,
    countImage: 0,
    selectSize: null,
    dataColor: {},
    data: {},
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToStateProduct(state, { payload }: PayloadAction<{}>) {
            state.data = payload;
        },
        isLoadingProduct(state, { payload }: PayloadAction<boolean>) {
            state.isLoading = payload;
        },
        addToStateColorProduct(state, {payload}: PayloadAction<{}>) {
            state.dataColor = payload;
        },
        currentNameProduct(state, {payload}: PayloadAction<string>) {
            state.nameProduct = payload.name;
        },
        currentIdColorProduct(state, {payload}: PayloadAction<number>) {
            state.idColor = payload;
        },
        currentSelectSize(state, {payload}: PayloadAction<number>) {
            state.selectSize = payload;
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