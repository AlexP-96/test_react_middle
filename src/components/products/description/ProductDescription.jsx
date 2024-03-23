import React from 'react';
import { useSelector } from 'react-redux';

const ProductDescription = ({description}) => {
    const selectorDescription = useSelector(state => state.getProduct.dataColor.description);

    // console.log(selectorDescription)

    return (
        <p className='description__product'>
            {selectorDescription}
        </p>
    );
};

export default ProductDescription;