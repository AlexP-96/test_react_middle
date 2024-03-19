import React, {
    useContext,
    useEffect,
} from 'react';

import { useSelector } from 'react-redux';

const SingleProduct = () => {

    const selectorId = useSelector(state => state.idProduct.id)

    useEffect(() => {
        console.log(selectorId);
    }, [])

    return (
        <div className='product__item'>
            <h3 className='title__product'>{'name'}</h3>
            <img
                src='#'
                alt='name'
            />
            <p className='color__product'>
                Цвет: {'цвет'}
            </p>
            <p className='description__product'>
                {'descr product'}
            </p>
            <div className='sizes__product'>
                <div className='aside__radio-size-product'>
                    <input
                        type='radio'
                        id={'label_id_' + 2}
                        className='input__radio-product'
                    />
                    <label htmlFor={'label_id_' + 2}>{'XS' + '-' + '44'}</label>
                </div>
            </div>
            <strong className='price__product'>
                {'price'}
            </strong>
            <button className='to__card-product'>В корзину</button>
        </div>
    );
};

export default SingleProduct;