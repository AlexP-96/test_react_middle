import {
  GET_DATA_PRODUCT,
  IS_LOADER_PRODUCT,
  GET_COLOR_PRODUCT,
  GET_NAME_PRODUCT,
  DATA_COLOR,
} from "../action/actions";

export const initialStateProduct = {
  isLoading: true,
  nameProduct: "",
  idColor: null,
  dataColor: [],
  data: [],
};

const reducerProduct = (state = initialStateProduct, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default reducerProduct;
