import {
    GET_DATA_SIZES,
    IS_LOADER_PRODUCT_SIZE,
} from '../actions_old/actions';

export const initialStateSize = {
    isLoading: true,
    data: [],
};

const reducerSizes = (state = initialStateSize, action) => {
    switch (action.type) {
        case GET_DATA_SIZES:
            return {
                ...state,
                data: action.payload,
            };
        case IS_LOADER_PRODUCT_SIZE:
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};

export default reducerSizes;