export const GET_DATA_PRODUCT = 'GET_DATA_PRODUCT';
export const IS_LOADER_PRODUCT = 'IS_LOADER_PRODUCT';
export const SELECT_SIZE_PRODUCT = 'SELECT_SIZE_PRODUCT';
export const GET_COLOR_PRODUCT = 'GET_COLOR_PRODUCT';
export const GET_NAME_PRODUCT = 'GET_NAME_PRODUCT';
export const DATA_COLOR = 'DATA_COLOR';

export const GET_DATA_SIZES = 'GET_DATA_SIZES';
export const IS_LOADER_PRODUCT_SIZE = 'IS_LOADER_PRODUCT_SIZE';

export const IMAGE_PRODUCT_NEXT = 'IMAGE_PRODUCT_NEXT';
export const IMAGE_PRODUCT_PREV = 'IMAGE_PRODUCT_PREV';

export const ADD_PRODUCT_CART = 'ADD_PRODUCT_CART';
export const DELETE_PRODUCT_CART = 'DELETE_PRODUCT_CART';
export const RESULT_PRICE_CART = 'RESULT_PRICE_CART';

export const LOADING_LIST_PRODUCT = 'LOAD_LIST_PRODUCT';
export const DATA_LIST_PRODUCT = 'DATA_LIST_PRODUCT';

export const actionDataListProduct = (payload) => {
    return {
        type: DATA_LIST_PRODUCT,
        payload,
    };
};

export const actionLoadingListProduct = (payload) => {
    return {
        type: LOADING_LIST_PRODUCT,
        payload,
    };
};

export const actionResultPriceCart = (payload) => {
    return {
        type: RESULT_PRICE_CART,
        payload,
    };
};

export const actionDeleteProductCard = (payload) => {
    return {
        type: DELETE_PRODUCT_CART,
        payload,
    };
};

export const actionSelectSizeProduct = (payload) => {
    return {
        type: SELECT_SIZE_PRODUCT,
        payload,
    };
};

export const actionAddProductCard = (payload) => {
    return {
        type: ADD_PRODUCT_CART,
        payload,
    };
};

export const actionImageNext = (payload) => {
    return {
        type: IMAGE_PRODUCT_NEXT,
        payload,
    };
};
export const actionImagePrev = (payload) => {
    return {
        type: IMAGE_PRODUCT_PREV,
        payload,
    };
};

export const actionGetProduct = (payload) => {
    return {
        type: GET_DATA_PRODUCT,
        payload,
    };
};

export const actionGetName = (payload) => {
    return {
        type: GET_NAME_PRODUCT,
        payload,
    };
};

export const actionDataColor = (payload) => {
    return {
        type: DATA_COLOR,
        payload,
    };
};

export const actionIsLoader = (payload) => {
    return {
        type: IS_LOADER_PRODUCT,
        payload,
    };
};

export const actionColor = (payload) => {
    return {
        type: GET_COLOR_PRODUCT,
        payload,
    };
};

export const actionGetSizesProduct = (payload) => {
    return {
        type: GET_DATA_SIZES,
        payload,
    };
};
export const actionIsLoaderProductSize = (payload) => {
    return {
        type: IS_LOADER_PRODUCT_SIZE,
        payload,
    };
};
