import { GET_DATA_SIZES, IS_LOADER_PRODUCT_SIZE } from "../action/actions";

const initialState = {
  isLoader: true,
  data: [],
};

const reducerSize = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SIZES:
      return {
        ...state,
        data: action.payload,
      };
    case IS_LOADER_PRODUCT_SIZE:
      return {
        ...state,
        isLoader: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export default reducerSize;
