import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';

const Header = () => {
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
                    >Корзина</Link>
                </div>

            </header>
        </div>
    );
};

export default Header;