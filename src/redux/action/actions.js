export const GET_DATA_PRODUCT = "GET_DATA_PRODUCT";
export const IS_LOADER_PRODUCT = "IS_LOADER_PRODUCT";
export const GET_DATA_SIZES = "GET_DATA_SIZES";
export const IS_LOADER_PRODUCT_SIZE = "IS_LOADER_PRODUCT_SIZE";
export const GET_COLOR_PRODUCT = "GET_COLOR_PRODUCT";
export const GET_NAME_PRODUCT = "GET_NAME_PRODUCT";
export const DATA_COLOR = 'DATA_COLOR';

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
    payload
  }
}

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
