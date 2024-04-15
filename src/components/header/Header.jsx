import React from 'react';
import './style.css';

import LinkMenu from './LinkMenu';
import LinkCart from './LinkCart';
import Logo from './Logo';

const Header = () => {

    return (
        <div className='container'>
            <header>
                <Logo />
                <ul>
                    <LinkMenu
                        name={'Каталог товаров'}
                        uri={'/catalog'}
                    />
                </ul>
                <LinkCart />
            </header>
        </div>
    );
};

export default Header;