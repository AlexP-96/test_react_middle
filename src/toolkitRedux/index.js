import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
import productSlice from './reducers/productSlice';
import cartSlice from './reducers/cartSlice';
import listProductSlice from './reducers/listProductSlice';
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