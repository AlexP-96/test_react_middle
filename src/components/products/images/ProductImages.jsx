import React from 'react';

import './ProductImages.css';
import {
    useDispatch,
    useSelector,
} from 'react-redux';

import Skeleton from '../../skeletons/Skeleton';
import {
    productSelector,
    sizesIsLoadingSelector,
} from '../../../toolkitRedux/selectors';
import {
    nextCountVisibleImageProduct,
    prevCountVisibleImageProduct,
} from '../../../toolkitRedux/reducers/productSlice';

const ProductImages = () => {
    const dispatch = useDispatch();
    const product = useSelector(productSelector);
    const sizesIsLoading = useSelector(sizesIsLoadingSelector);

    const handlerImage = step => {
        let countImages = product.dataColor.images.length - 1;
        if (step === '+') {
            dispatch(nextCountVisibleImageProduct());
            if (product.countImage >= countImages) {
                dispatch(nextCountVisibleImageProduct(0));
            }
        }
        if (step === '-') {
            dispatch(prevCountVisibleImageProduct());
            if (product.countImage < countImages) {
                dispatch(prevCountVisibleImageProduct(countImages));
            }
        }
    };
    return (
        <div className='wrapper__images-product'>
            {product.dataColor.images && (
                <div className='image_product'>
                    <button
                        className='btn__image btn_image-prev'
                        onClick={() => handlerImage('-')}
                    ></button>

                    {sizesIsLoading && (
                        <Skeleton
                            width={300}
                            height={400}
                        />
                    )}

                    {!sizesIsLoading && (
                        <img
                            src={product.dataColor.images[product.countImage]}
                            alt='name'
                        />
                    )}

                    <button
                        className='btn__image btn_image-next'
                        onClick={() => handlerImage('+')}
                    ></button>
                </div>
            )}
        </div>
    );
};

export default ProductImages;