import { combineReducers } from 'redux';
import reducerProduct from './reducer-product';
import reducerSize from './reducer-sizes';

const rootReducer = combineReducers({
    getProduct: reducerProduct,
    getSizeProduct: reducerSize
});

export default rootReducer;