import React from 'react';
import { Link } from 'react-router-dom';
import CountProductCart from './CountProductCart';

const LinkCart = () => {

    return (
        <div className='cards'>
            <Link
                to='/card'
            >
                Корзина
            </Link>
            <CountProductCart />
        </div>
    );
};

export default LinkCart;