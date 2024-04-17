import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/'>
            <div className='logo'>
                Красивое лого
            </div>
        </Link>
    );
};

export default Logo;