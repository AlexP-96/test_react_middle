
//корзина
export const cartItemsSelector = (state) => state.cart.items;
export const cartItemsLengthSelector = (state) => state.cart.items.length;
export const cartResulPrice = (state) => state.cart.resultPrice;


//продукты
export const productSelector = (state) => state.product;
export const productIsLoadingSelector = (state) => state.product.isLoading;
export const productNameSelector = (state) => state.product.nameProduct;
export const dataProductSelector = (state) => state.product.data;
export const currentProductIdColorSelector = (state) => state.product.idColor;
export const productColorDescriptionSelector = (state) => state.product.dataColor.description;
export const productDataColorsSelector = (state) => state.product.data.colors;
export const colorProductSelector = (state) => state.product.dataColor;
export const selectedSizeProductSelector = (state) => state.product.selectSize;
export const nameColorsProductSelector = (state) => state.product.dataColor.name;
export const colorProductSizesSelector = (state) => state.product.dataColor.sizes;
export const currentCountImageSelector = (state) => state.product.countImage;
export const countsImagesProductSelector = state => state.product.dataColor.images;
export const currentProductPriceSelector = (state) => state.product.dataColor.price;

export const sizesIsLoadingSelector = (state) => state.sizes.isLoading;
export const sizesListSelector = (state) => state.sizes.data;

export const listProductSelector = (state) => state.listProduct.data;
export const listProductsIsLoadingSelector = (state) => state.listProduct.isLoading;


