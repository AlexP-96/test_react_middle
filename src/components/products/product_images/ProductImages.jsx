import React from 'react';

import './ProductImages.css';
import {
    useDispatch,
    useSelector,
} from 'react-redux';

import {
    actionImagePrev,
    actionImageNext,
} from '../../../redux/actions/actions';
import Skeleton from '../../skeletons/Skeleton';

const ProductImages = () => {

    const dispatch = useDispatch();
    const selector = useSelector(state => state.getProduct);
    const selectorSize = useSelector(state => state.getSizeProduct);

    const handlerImage = step => {
        let countImages = selector.dataColor.images.length - 1;
        if (step === '+') {
            dispatch(actionImageNext());
            if (selector.countImage >= countImages) {
                dispatch(actionImageNext(0));
            }
        }
        if (step === '-') {
            dispatch(actionImagePrev());
            if (selector.countImage < countImages) {
                dispatch(actionImagePrev(countImages));
            }
        }
    };
    return (
        <div className='wrapper__images-product'>
            {selector.dataColor.images &&

                <div className='image_product'>
                    <button onClick={() => handlerImage('-')}> Предыдущее</button>
                    {
                        selectorSize.isLoading &&
                        <Skeleton
                            width={300}
                            height={400}
                        />
                    }
                    {
                        !selectorSize.isLoading &&
                        <img
                            src={selector.dataColor.images[selector.countImage]}
                            alt='name'
                        />
                    }

                    <button onClick={() => handlerImage('+')}>Следущее</button>
                </div>

            }
        </div>
    );
};

export default ProductImages;