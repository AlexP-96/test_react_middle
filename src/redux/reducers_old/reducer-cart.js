import {
    ADD_PRODUCT_CART,
    DELETE_PRODUCT_CART,
    RESULT_PRICE_CART,
} from '../actions_old/actions';

export const initialStateCard = {
    isLoading: true,
    items: [],
    resultPrice: 0,
};

const reducerCart = (state = initialStateCard, action) => {
    switch (action.type) {
        case ADD_PRODUCT_CART:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload,
                ],
            };
        case DELETE_PRODUCT_CART:
            return {
                ...state,
                items: [...state.items].filter((item, index) => index !== action.payload),
            };
        case RESULT_PRICE_CART:
            return {
                ...state,
                resultPrice: action.payload,
            };
        default:
            return state;
    }
};
export default reducerCart;