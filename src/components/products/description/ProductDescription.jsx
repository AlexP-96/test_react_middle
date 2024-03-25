import React from 'react';
import { useSelector } from 'react-redux';
import { productColorDescriptionSelector } from '../../../redux/store/selectors';

const ProductDescription = () => {
    const description = useSelector(productColorDescriptionSelector);

    return (
        <div className='wrapper__description'>
            <div className='title__description'>Описание:</div>
            <p className='description__product'>
                {description}
            </p>
        </div>
    );
};

export default ProductDescription;