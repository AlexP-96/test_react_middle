import { combineReducers } from 'redux';
import reducerProduct from './reducer-product';
import reducerSize from './reducer-sizes';
import reducerCart from './reducer-cart';
import reducerListProduct from './reducer-list-product';

const rootReducer = combineReducers({
    getProduct: reducerProduct,
    getSizeProduct: reducerSize,
    cart: reducerCart,
    listProduct: reducerListProduct,
});

export default rootReducer;