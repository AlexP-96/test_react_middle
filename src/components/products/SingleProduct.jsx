import React, {
    useEffect,
} from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionColor, actionDataColor, actionGetName, actionGetProduct, actionIsLoader } from '../../redux/action/actions';
import { getProduct, getProductColor } from '../../services/api';
import ProductColor from './colors/ProductColor';
import ProductImages from './product_images/ProductImages';
import ProductSizes from './sizes/ProductSizes';
import ProductDescription from './description/ProductDescription';

const SingleProduct = () => {

    const dispatch = useDispatch();
    const selectorProduct = useSelector(state => state.getProduct);
    const { product_id } = useParams();

    useEffect(() => {
        dispatch(actionIsLoader(true))
        getProduct(Number(product_id))
            .then(data => {
                dispatch(actionIsLoader(false));
                dispatch(actionColor(data.colors[0].id))
                dispatch(actionGetName(data));
                dispatch(actionGetProduct(data));
            })
            .catch(err => {
                dispatch(actionIsLoader(true));
                console.log(err);
            })

        return () => {
            dispatch(actionIsLoader(true))
        }
    }, []);


    useEffect(() => {
        if (selectorProduct.idColor) {
            getProductColor(Number(product_id), selectorProduct.idColor).then(data => {
                dispatch(actionIsLoader(false));
                dispatch(actionDataColor(data));
            }).catch(err => {
                dispatch(actionIsLoader(true));
                console.log(err);
            })
        }

    }, [selectorProduct.idColor]);

    return (
        <>
            {
                selectorProduct.isLoading && 'Детальная загрузка товара...'
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
                    <strong className='price__product'>
                        Цена: {selectorProduct.dataColor.price}
                    </strong>
                    <button className='to__card-product'>В корзину</button>
                </div>

            }
        </>
    )
};

export default SingleProduct;