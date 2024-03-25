export const cartItemsSelector = (state) => state.cart.items;
export const cartItemsLengthSelector = (state) => state.cart.items.length;
export const cartResulPrice = (state) => state.cart.resultPrice;

export const productSelector = (state) => state.getProduct;
export const productColorDescriptionSelector = (state) => state.getProduct.dataColor.description;

export const sizesIsLoadingSelector = (state) => state.getSizeProduct.isLoading;
export const sizesListSelector = (state) => state.getSizeProduct.data;

export const listProductSelector = (state) => state.listProduct.data;
export const listProductsIsLoadingSelector = (state) => state.listProduct.isLoading;


