import React, {
    useEffect, useState,
} from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetProduct, actionIsLoader } from '../../redux/action/actions';
import { getProduct } from '../../services/api';
import ProductColor from './colors/ProductColor';
import ProductImages from './product_images/ProductImages';
import ProductSizes from './sizes/ProductSizes';

const SingleProduct = () => {

    const dispatch = useDispatch();
    const selectorProduct = useSelector(state => state.getProduct);
    const { product_id } = useParams();

    useEffect(() => {
        getProduct(Number(product_id))
            .then(data => {
                dispatch(actionIsLoader(false));
                dispatch(actionGetProduct(data));

            })
            .catch(err => {
                dispatch(actionIsLoader(true));
                console.log(err);
            })

    }, []);

    return (
        <>
            {
                selectorProduct.isLoader && 'Детальная загрузка товара...'
            }

            {
                !selectorProduct.isLoader && selectorProduct.data.map(item => {
                    return (
                        <div className='product__item' key={item.id}>
                            <h3 className='title__product'>{item.name}</h3>
                            <ProductImages images={item.colors[0]} />
                            <ProductColor colors={item.colors} />
                            <p className='description__product'>
                                {item.colors[0].description}
                            </p>
                            <div className='sizes__product'>
                            <ProductSizes size={item.colors[0].sizes} />
                            </div>
                            <strong className='price__product'>
                                Цена: {item.colors[0].price}
                            </strong>
                            <button className='to__card-product'>В корзину</button>
                        </div>
                    )
                })
            }
        </>
    )
};

export default SingleProduct;