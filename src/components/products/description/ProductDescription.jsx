import React from 'react';
import {
    shallowEqual,
    useSelector,
} from 'react-redux';
import { productColorDescriptionSelector } from '../../../toolkitRedux/selectors';

const ProductDescription = () => {
    const description = useSelector(productColorDescriptionSelector, shallowEqual);

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