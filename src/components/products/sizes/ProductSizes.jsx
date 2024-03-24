import React, { useEffect } from 'react';

import {
    getSizes,
} from '../../../services/api';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import {
    actionGetSizesProduct,
    actionIsLoaderProductSize,
} from '../../../redux/actions/actions';
import InputSize from './InputSize';
import Skeleton from '../../skeletons/Skeleton';

const ProductSizes = ({ size }) => {
    const dispatch = useDispatch();
    const selectorSize = useSelector(state => state.getSizeProduct);

    useEffect(() => {
        getSizes().then(data => {
            dispatch(actionIsLoaderProductSize(false));
            dispatch(actionGetSizesProduct(data));
        }).catch(err => {
            dispatch(actionIsLoaderProductSize(true));
            console.log(err);
        });

        return () => {
            dispatch(actionIsLoaderProductSize(true));
        };
    }, [dispatch]);

    return (
        <>  {
            selectorSize.isLoading &&

            <Skeleton
                width={300}
                height={32}
            />

        }
            {(!selectorSize.isLoading && size) &&
                <div className='wrapper__sizes'>
                    <h5 className='title__sizes'>Доступные размеры</h5>
                    <div className='aside__sizes'>
                        {selectorSize.data.map((_size, index) => {
                            return <InputSize
                                key={_size.id}
                                availableId={_size.id}
                                label={_size.label}
                                nothing={size.includes(_size.id)
                                    ? false
                                    : true}
                                number={_size.number}
                            />;

                        })}
                    </div>
                </div>
            }
        </>
    );
};

export default ProductSizes;