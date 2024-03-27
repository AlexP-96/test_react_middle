import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
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
    productSelector,
} from '../../toolkitRedux/selectors';
import { isLoadingProduct } from '../../toolkitRedux/reducers/productSlice';
import { isLoadingSizes } from '../../toolkitRedux/reducers/sizesSlice';
import { addProductCart } from '../../toolkitRedux/reducers/cartSlice';


const SingleProduct = () => {
    const dispatch = useDispatch();

    const product = useSelector(productSelector);
    const cartProducts = useSelector(cartItemsSelector);

    const { product_id } = useParams();

    useEffect(() => {
        dispatch(isLoadingProduct(true));
        dispatch(getProduct(Number(product_id)));

        return () => {
            // dispatch(actionIsLoader(true));
        };

    }, [dispatch]);

    useEffect(() => {
        if (product.idColor) {
            dispatch(isLoadingSizes(true));
            dispatch(getProductColor(Number(product_id), product.idColor));
        }
    }, [product.idColor]);

    useEffect(() => {
        if (cartProducts.length !== 0) {
            localStorage.setItem('cart', JSON.stringify(cartProducts));
        }
    }, [cartProducts]);

    const handlerCardProduct = () => {
        if (product.selectSize === null) {
            alert('Размер не выбран, выберите размер');
        } else {
            let objData = {
                // idProduct: null,

                productName: null,
                productColor: null,
                productSize: null,
                price: null,
                image: null,
            };

            objData.productName = product.nameProduct;
            objData.productColor = product.dataColor.name;
            objData.price = product.dataColor.price;
            // objData.idProduct = product.data.id;
            // objData.idColor = product.idColor;
            objData.productSize = product.selectSize;
            objData.image = product.dataColor.images[0];

            dispatch(addProductCart(objData));
        }
    };

    return (
        <>
            {product.isLoading && (
                <Skeleton
                    width={300}
                    height={400}
                />
            )}

            {!product.isLoading && (
                <div className='product__item'>
                    <h3 className='title__product'>{product.nameProduct}</h3>

                    <ProductImages />

                    <ProductColor colors={product.data} />

                    <ProductDescription />

                    <div className='sizes__product'>
                        <ProductSizes size={product.dataColor.sizes} />
                    </div>

                    <div className='price__product'>
                        Цена: <strong>{product.dataColor.price}</strong>
                    </div>

                    <button
                        className='to__card-product'
                        onClick={handlerCardProduct}
                    >
                        В корзину
                    </button>
                </div>
            )}
        </>
    );
};

export default SingleProduct;