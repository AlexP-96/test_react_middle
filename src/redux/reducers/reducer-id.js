import { TYPE_GET_PRODUCT_ID } from '../action/actions';


let initialState = {
    id: null,
};

const reducerGetId = (state = initialState, action) => {
    switch (action.type) {
        case TYPE_GET_PRODUCT_ID:
            return {
                ...state,
                id: action.payload,
            };
        default:
            return state;
    }
};

export default reducerGetId;