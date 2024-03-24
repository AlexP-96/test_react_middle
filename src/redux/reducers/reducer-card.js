import {
    ADD_PRODUCT_CARD,
    DELETE_PRODUCT_CARD,
} from '../actions/actions';

export const initialStateCard = {
    isLoading: true,
    items: [],
};

const reducerCard = (state = initialStateCard, action) => {
    switch (action.type) {
        case ADD_PRODUCT_CARD:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload,
                ],
            };
        case DELETE_PRODUCT_CARD:
            return {
                ...state,
                items: [...state.items].filter((item, index) => index !== action.payload),
            };
        default:
            return state;
    }
};
export default reducerCard;