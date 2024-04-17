
export interface IState {
    product: IProductState,
    cart: ICartState,
    listProduct: IListProductState,
    sizes: ISizesState,
}

export interface IProductState {
    isLoading: boolean;
    nameProduct: string;
    idColor: null|number;
    countImage: number;
    selectSize: null;
    dataColor: {};
    data: {};
}

export interface ICartState {
    isLoading: boolean;
    items: [];
    resultPrice: number;
}

export interface IListProductState {
    isLoading: boolean;
    data: [];
}
export interface ISizesState {
    isLoading: boolean,
    data: [],
}

