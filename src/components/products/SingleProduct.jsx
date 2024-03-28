import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    shallowEqual,
    useDispatch,
    useSelector,
} from 'react-redux';
import Skeleton from '../skeletons/Skeleton';

import {
    getProduct,
    getProductColor,
} from '../../services/api';
import ProductColor from './colors/ProductColor';
import ProductImages from './images/ProductImages';
import ProductSizes from './sizes/ProductSizes';
import ProductDescription from './description/ProductDescription';
import {
    cartItemsSelector,
    colorProductSizesSelector,
    currentProductIdColorSelector,
    dataProductSelector,
    productIsLoadingSelector,
    productNameSelector,
} from '../../toolkitRedux/selectors';
import { isLoadingProduct } from '../../toolkitRedux/reducers/productSlice';
import { isLoadingSizes } from '../../toolkitRedux/reducers/sizesSlice';
import ProductPrice from './price/ProductPrice';
import ButtonCart from './buttons/ButtonCart';

const SingleProduct = () => {
    const dispatch = useDispatch();

    const productIsLoading = useSelector(productIsLoadingSelector);
    const currentProductIdColor = useSelector(currentProductIdColorSelector);
    const productColorsSizes = useSelector(colorProductSizesSelector);
    const productData = useSelector(dataProductSelector);

    const { product_id } = useParams();

    useEffect(() => {
        dispatch(isLoadingProduct(true));
        dispatch(getProduct(Number(product_id)));

    }, []);

    useEffect(() => {
        if (currentProductIdColor) {
            dispatch(isLoadingSizes(true));
            dispatch(getProductColor(Number(product_id), currentProductIdColor));
        }
    }, [currentProductIdColor]);

    return (
        <>
            {productIsLoading && (
                <Skeleton
                    width={300}
                    height={400}
                />
            )}

            {!productIsLoading && (
                <div className='product__item'>
                    <h3 className='title__product'>{productNameSelector}</h3>
                    <ProductImages />
                    <ProductColor colors={productData} />
                    <ProductDescription />
                    <ProductSizes size={productColorsSizes} />
                    <ProductPrice />
                    <ButtonCart />
                </div>
            )}
        </>
    );
};

export default SingleProduct;