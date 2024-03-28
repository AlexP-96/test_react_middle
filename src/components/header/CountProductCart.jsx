import React from 'react';
import { useSelector } from 'react-redux';
import { cartItemsLengthSelector } from '../../toolkitRedux/selectors';

const CountProductCart = () => {
    const cardItemsLength = useSelector(cartItemsLengthSelector);
    return (
        <div
            className='count__product-cart link__to-card'
            data-count={cardItemsLength}
        >
        </div>
    );
};

export default CountProductCart;