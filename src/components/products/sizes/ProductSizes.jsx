import React, { useEffect } from 'react';
import { getSizes } from '../../../services/api';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import { actionIsLoaderProductSize } from '../../../redux/actions/actions';
import Skeleton from '../../skeletons/Skeleton';
import SizesList from './SizesList';
import { sizesIsLoadingSelector } from '../../../redux/store/selectors';

const ProductSizes = ({ size }) => {
    const dispatch = useDispatch();

    const isLoading = useSelector(sizesIsLoadingSelector);

    useEffect(() => {
        dispatch(getSizes());

        return () => {
            dispatch(actionIsLoaderProductSize(true));
        };
    }, [dispatch]);

    return (
        <>
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


        </>
    );
};

export default ProductSizes;