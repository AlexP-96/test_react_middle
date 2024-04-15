import React from 'react';

import './ProductImages.css';
import {
    shallowEqual,
    useDispatch,
    useSelector,
} from 'react-redux';

import Skeleton from '../../skeletons/Skeleton';
import {
    countsImagesProductSelector,
    currentCountImageSelector,
    sizesIsLoadingSelector,
} from '../../../toolkitRedux/selectors';
import {
    nextCountVisibleImageProduct,
    prevCountVisibleImageProduct,
} from '../../../toolkitRedux/reducers/productSlice';

const ProductImages = () => {
    const dispatch = useDispatch();

    const productColorImages = useSelector(countsImagesProductSelector, shallowEqual);
    const sizesIsLoading = useSelector(sizesIsLoadingSelector, shallowEqual);
    const currentImage = useSelector(currentCountImageSelector, shallowEqual);

    const handlerImage = step => {
        let countImages = productColorImages.length - 1;
        if (step === '+') {
            dispatch(nextCountVisibleImageProduct());
            if (currentImage >= countImages) {
                dispatch(nextCountVisibleImageProduct(0));
            }
        }
        if (step === '-') {
            dispatch(prevCountVisibleImageProduct());
            if (currentImage < countImages) {
                dispatch(prevCountVisibleImageProduct(countImages));
            }
        }
    };
    return (
        <div className='wrapper__images-product'>
            {productColorImages && (
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
                            src={productColorImages[currentImage]}
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