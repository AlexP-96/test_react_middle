import {
    DATA_LIST_PRODUCT,
    LOADING_LIST_PRODUCT,
} from '../actions_old/actions';

const initialStateListProduct = {
    isLoading: true,
    data: [],
};

const reducerListProduct = (state = initialStateListProduct, action) => {
    switch (action.type) {

        case LOADING_LIST_PRODUCT:
            return {
                ...state,
                isLoading: action.payload,
            };
        case DATA_LIST_PRODUCT:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};

export default reducerListProduct;