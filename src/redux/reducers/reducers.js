import { combineReducers } from 'redux';
import reducerGetId from './reducer-id';

const rootReducer = combineReducers({
    idProduct: reducerGetId,
});

export default rootReducer;