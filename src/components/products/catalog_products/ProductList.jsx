import React, {
    useEffect,
} from 'react';

import '../style.css';

import { Link } from 'react-router-dom';

const ProductList = ({
        name,
        image,
        id,
    }) => {

        return (
            <Link
                to={'/product/' + id}
                className='wrapper-product'
            >
                <h4 className='title__product'>{name}</h4>
                <div
                    className='wrapper__scroll-img-product'
                >
                    <div
                        className='wrapper__img-product'
                    >
                        <img
                            key={image[0]}
                            src={image[0]}
                            alt='image_photo'
                        />
                    </div>
                </div>
            </Link>
        );
    }
;

export default ProductList;