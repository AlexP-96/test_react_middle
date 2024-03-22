import { GET_DATA_PRODUCT, IS_LOADER_PRODUCT } from "../action/actions";

let initialState = {
  isLoader: true,
  data: [],
};

const reducerProduct = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_PRODUCT:
      return {
        ...state,
        isLoader: false,
        data: [action.payload],
      };
    case IS_LOADER_PRODUCT:
      return {
        ...state,
        isLoader: action.payload,
      };

    default:
      return state;
  }
};

export default reducerProduct;
