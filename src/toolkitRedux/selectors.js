export const cartItemsSelector = (state) => state.cart.items;
export const cartItemsLengthSelector = (state) => state.cart.items.length;
export const cartResulPrice = (state) => state.cart.resultPrice;

export const productSelector = (state) => state.product;
export const productColorDescriptionSelector = (state) => state.product.dataColor.description;

export const sizesIsLoadingSelector = (state) => state.sizes.isLoading;
export const sizesListSelector = (state) => state.sizes.data;

export const listProductSelector = (state) => state.listProduct.data;
export const listProductsIsLoadingSelector = (state) => state.listProduct.isLoading;


