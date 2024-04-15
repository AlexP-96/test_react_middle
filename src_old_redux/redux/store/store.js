import {
    applyMiddleware,
    legacy_createStore as createStore,
} from 'redux';
import { thunk } from 'redux-thunk';

import rootReducer from '../reducers/reducers';
import { initialStateSize } from '../reducers/reducer-sizes';
import { initialStateProduct } from '../reducers/reducer-product';
import { composeWithDevTools } from '@redux-devtools/extension';

const initialState = {
    product: initialStateProduct,
    sizes: initialStateSize,
};

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;