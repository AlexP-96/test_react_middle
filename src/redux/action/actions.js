export const TYPE_GET_PRODUCT_ID = 'GET_ID_PRODUCT';

export const actionGetProductId = (id) => {
    return {
        type: TYPE_GET_PRODUCT_ID,
        payload: id
    }
}

