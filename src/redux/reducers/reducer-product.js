import {
    GET_DATA_PRODUCT,
    IS_LOADER_PRODUCT,
    GET_COLOR_PRODUCT,
    GET_NAME_PRODUCT,
    DATA_COLOR,
    IMAGE_PRODUCT_NEXT,
    IMAGE_PRODUCT_PREV,
    SELECT_SIZE_PRODUCT,
} from '../actions/actions';

export const initialStateProduct = {
    isLoading: true,
    nameProduct: '',
    idColor: null,
    countImage: 0,
    selectSize: null,
    dataColor: [],
    data: [],
};

const reducerProduct = (state = initialStateProduct, action) => {
    switch (action.type) {
        case SELECT_SIZE_PRODUCT:
            return {
                ...state,
                selectSize: action.payload,
            };

        case GET_DATA_PRODUCT:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case DATA_COLOR:
            return {
                ...state,
                isLoading: false,
                dataColor: action.payload,
            };
        case IS_LOADER_PRODUCT:
            return {
                ...state,
                isLoading: action.payload,
            };
        case GET_COLOR_PRODUCT:
            return {
                ...state,
                idColor: action.payload,
            };
        case GET_NAME_PRODUCT:
            return {
                ...state,
                nameProduct: action.payload.name,
            };
        case IMAGE_PRODUCT_NEXT:
            return {
                ...state,
                countImage: action.payload === undefined
                    ? state.countImage + 1
                    : 0,
            };
        case IMAGE_PRODUCT_PREV:
            return {
                ...state,
                countImage: action.payload === undefined
                    ? state.countImage - 1
                    : action.payload,
            };
        default:
            return state;
    }
};

export default reducerProduct;
