import React, {
    useEffect,
} from 'react';
import Skeleton from '../skeletons/Skeleton';

import { useParams } from 'react-router-dom';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import {
    actionAddProductCard,
    actionColor,
    actionDataColor,
    actionGetName,
    actionGetProduct,
    actionIsLoader,
    actionIsLoaderProductSize,
} from '../../redux/actions/actions';
import {
    getProduct,
    getProductColor,
} from '../../services/api';
import ProductColor from './colors/ProductColor';
import ProductImages from './product_images/ProductImages';
import ProductSizes from './sizes/ProductSizes';
import ProductDescription from './description/ProductDescription';

const SingleProduct = () => {

    const dispatch = useDispatch();
    const selectorProduct = useSelector(state => state.getProduct);
    const { product_id } = useParams();

    useEffect(() => {
        dispatch(actionIsLoader(true));
        getProduct(Number(product_id))
            .then(data => {
                dispatch(actionIsLoader(false));
                dispatch(actionColor(data.colors[0].id));
                dispatch(actionGetName(data));
                dispatch(actionGetProduct(data));
            })
            .catch(err => {
                dispatch(actionIsLoader(true));
                console.log(err);
            });

        return () => {
            // dispatch(actionIsLoader(true));
        };
    }, [dispatch]);

    useEffect(() => {
        if (selectorProduct.idColor) {
            dispatch(actionIsLoaderProductSize(true));
            getProductColor(Number(product_id), selectorProduct.idColor).then(data => {
                dispatch(actionIsLoaderProductSize(false));
                dispatch(actionDataColor(data));
            }).catch(err => {
                dispatch(actionIsLoader(true));
                console.log(err);
            });
        }

    }, [selectorProduct.idColor]);

    const handlerCardProduct = () => {
        if (selectorProduct.selectSize === null) {
            alert('Размер не выбран, выберите размер');
        } else {
            let objData = {
                idProduct: null,
                idColor: null,
                productName: null,
                productColor: null,
                productSize: null,
                price: null,
                image: null
            };

            objData.productName = selectorProduct.nameProduct;
            objData.productColor = selectorProduct.dataColor.name;
            objData.price = selectorProduct.dataColor.price;
            objData.idProduct = selectorProduct.data.id;
            objData.idColor = selectorProduct.idColor;
            objData.productSize = selectorProduct.selectSize;
            objData.image = selectorProduct.dataColor.images[0];
            dispatch(actionAddProductCard(objData));
        }

    };

    return (
        <>
            {
                selectorProduct.isLoading &&
                <Skeleton
                    width={300}
                    height={400}
                />

            }
            {
                !selectorProduct.isLoading &&

                <div className='product__item'>
                    <h3 className='title__product'>{selectorProduct.nameProduct}</h3>
                    <ProductImages />
                    <ProductColor colors={selectorProduct.data} />
                    <ProductDescription />
                    <div className='sizes__product'>
                        <ProductSizes size={selectorProduct.dataColor.sizes} />
                    </div>
                    <div className='price__product'>
                        Цена: <strong>{selectorProduct.dataColor.price}</strong>
                    </div>
                    <button
                        className='to__card-product'
                        onClick={handlerCardProduct}
                    >В корзину
                    </button>
                </div>

            }
        </>
    );
};

export default SingleProduct;