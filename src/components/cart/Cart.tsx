import React from 'react';
import './Cart.css';

import TotalPrice from './TotalPrice';
import WrapperListProductCart from './WrapperListProductCart';

const Card = () => {

    return (
        <div className='container'>
            <h1>Ваша корзина</h1>
            <TotalPrice />
            <WrapperListProductCart />
        </div>
    );
};

export default Card;