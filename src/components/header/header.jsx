import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';
import { useSelector } from 'react-redux';

const Header = () => {
    const selector = useSelector(state => state.card);

    return (
        <div className='container'>
            <header>
                <div className='logo'>
                    Красивое лого
                </div>
                <ul>
                    <li><Link
                        to='/catalog'
                        className='link__menu'
                    >Список товаров</Link></li>
                </ul>

                <div className='cards'>
                    <Link
                        to='/card'
                        className='link__to-card'
                        data-count={selector.items.length}
                    >Корзина</Link>
                </div>

            </header>
        </div>
    );
};

export default Header;