import React from 'react';

import './ProductImages.css'

const ProductImages = ({ images }) => {

    return (

        <div className='image_product'>
            {
                images.images.map((_img, index) => {
                    return (
                        <img
                            key={index}
                            src={_img}
                            alt='name'
                        />
                    )
                })

            }
        </div>

    );
};

export default ProductImages;