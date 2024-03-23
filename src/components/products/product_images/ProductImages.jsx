import React, { useEffect } from 'react';

import './ProductImages.css'
import { useDispatch, useSelector } from 'react-redux';
import { actionIsLoader } from '../../../redux/action/actions';

const ProductImages = () => {

    const dispatch = useDispatch();

    const selector = useSelector(state => state.getProduct);

    useEffect(() => {
        return () => {
            dispatch(actionIsLoader(true))
        }
    }, [])

    return (
        <>
            {selector.dataColor.images &&
                <div className='image_product' >
                    {selector.dataColor.images.map((_img, index) => {
                        return (
                            <img
                                key={index}
                                src={_img}
                                alt='name'
                            />
                        )
                    })}
                </div >
            }
        </>
    );
};

export default ProductImages;