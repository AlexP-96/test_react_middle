import React from 'react';
import { useSelector } from 'react-redux';

const ProductDescription = ({ description }) => {
    const selectorDescription = useSelector(state => state.getProduct.dataColor.description);

    return (
        <div className='wrapper__description'>
            <div className='title__description'>Описание:</div>
            <p className='description__product'>
                {selectorDescription}
            </p>
        </div>
    );
};

export default ProductDescription;