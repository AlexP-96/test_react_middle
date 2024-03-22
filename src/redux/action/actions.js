export const GET_DATA_PRODUCT = "GET_DATA_PRODUCT";
export const IS_LOADER_PRODUCT = "IS_LOADER_PRODUCT";
export const GET_DATA_SIZES = "GET_DATA_SIZES";
export const IS_LOADER_PRODUCT_SIZE = "IS_LOADER_PRODUCT_SIZE";

export const actionGetProduct = (payload) => {
  return {
    type: GET_DATA_PRODUCT,
    payload,
  };
};

export const actionIsLoader = (payload) => {
  return {
    type: IS_LOADER_PRODUCT,
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
