import { GET_DATA_SIZES, IS_LOADER_PRODUCT_SIZE } from "../action/actions";

export const initialStateSize = {
  isLoading: true,
  data: [],
};

const reducerSize = (state = initialStateSize, action) => {
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
      return state
  }
};

export default reducerSize;
