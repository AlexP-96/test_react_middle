import { combineReducers } from 'redux';
import reducerProduct from './reducer-product';
import reducerSize from './reducer-sizes';
import reducerCard  from './reducer-card';

const rootReducer = combineReducers({
    getProduct: reducerProduct,
    getSizeProduct: reducerSize,
    card: reducerCard
});

export default rootReducer;