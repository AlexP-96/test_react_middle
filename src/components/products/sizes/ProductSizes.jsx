import React, { useEffect } from 'react';
import { getSizes } from '../../../services/api';
import {
    shallowEqual,
    useDispatch,
    useSelector,
} from 'react-redux';
import Skeleton from '../../skeletons/Skeleton';
import SizesList from './SizesList';
import { sizesIsLoadingSelector } from '../../../toolkitRedux/selectors';
import { isLoadingSizes } from '../../../toolkitRedux/reducers/sizesSlice';

const ProductSizes = ({ size }) => {

    const dispatch = useDispatch();
    const isLoading = useSelector(sizesIsLoadingSelector, shallowEqual);

    useEffect(() => {
        dispatch(getSizes());

        return () => {
            dispatch(isLoadingSizes(true));
        };
    }, [dispatch]);

    return (
        <div className='sizes__product'>
            <h5 className='title__sizes'>Доступные размеры</h5>
            {isLoading && (
                <Skeleton
                    paddingTop={20}
                    width={300}
                    height={32}
                />
            )}
            {
                !isLoading && <SizesList size={size} />
            }


        </div>
    );
};

export default ProductSizes;