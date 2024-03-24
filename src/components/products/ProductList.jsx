import React, {
    useEffect,
    useRef,

} from 'react';

import './style.css';
import {
    useDispatch,
    
} from 'react-redux';

import { Link } from 'react-router-dom';
import { actionGetProductId } from '../../redux/actions/actions';

const ProductList = ({
        name,
        image,
        id,
    }) => {

        const dispatchId = useDispatch();

        const refElem = useRef(null);

        useEffect(() => {
            // console.log(image);s 
        }, []);

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
                        ref={refElem}
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