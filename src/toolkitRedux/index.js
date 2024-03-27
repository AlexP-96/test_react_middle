import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
import productSlice from './productSlice';
import cartSlice from './cartSlice';
import listProductSlice from './listProductSlice';
import sizesSlice from './sizesSlice';

const rootReducer = combineReducers({
    product: productSlice,
    cart: cartSlice,
    listProduct: listProductSlice,
    sizes: sizesSlice,
});


export const store = configureStore({
    reducer: rootReducer,
});