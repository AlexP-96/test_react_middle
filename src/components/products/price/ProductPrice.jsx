import React from 'react';
import { useSelector } from 'react-redux';
import { currentProductPriceSelector } from '../../../toolkitRedux/selectors';

const ProductPrice = () => {
    const currentProductPrice = useSelector(currentProductPriceSelector);

    return (
        <div className='price__product'>
            Цена: <strong>{currentProductPrice}</strong>
        </div>
    );
};

export default ProductPrice;