import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.css';
import { cartItemsLengthSelector } from '../../redux/store/selectors';

const Header = () => {
    const cardItemsLength = useSelector(cartItemsLengthSelector);

    return (
        <div className='container'>
            <header>
                <div className='logo'>
                    Красивое лого
                </div>

                <ul>
                    <li>
                        <Link
                            to='/catalog'
                            className='link__menu'
                        >
                            Список товаров
                        </Link>
                    </li>
                </ul>

                <div className='cards'>
                    <Link
                        to='/card'
                        className='link__to-card'
                        data-count={cardItemsLength}
                    >
                        Корзина
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Header;