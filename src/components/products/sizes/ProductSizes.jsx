import React, { useEffect } from 'react';

import { getSizes, getSize } from '../../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetSizesProduct, actionIsLoaderProductSize } from '../../../redux/action/actions';
import InputSize from './InputSize';

const ProductSizes = ({ size }) => {
    console.log(size)
    const dispatch = useDispatch();
    const selectorSize = useSelector(state => state.getSizeProduct)

    useEffect(() => {
        getSizes().then(data => {
            dispatch(actionIsLoaderProductSize(false));
            dispatch(actionGetSizesProduct(data));
        }).catch(err => {
            dispatch(actionIsLoaderProductSize(true));
            console.log(err);
        })
        return () => {
            dispatch(actionIsLoaderProductSize(true));
        }
    }, [])
    return (
        <>  {
            selectorSize.isLoading &&
            <div className='loading'>
                Загрузка размеров...
            </div>
        }
            {(!selectorSize.isLoading && size) &&
                <div className='wrapper__sizes'>
                    <h5 className='title__sizes'>Доступные размеры</h5>
                    {selectorSize.data.map((_size, index) => {
                        if (size[index] === _size.id) {
                            return <InputSize
                                key={_size.id}
                                availableId={_size.id}
                                label={_size.label}
                                not={false}
                                number={_size.number}
                            />
                        } else {
                            return <InputSize
                                key={_size.id}
                                availableId={_size.id}
                                label={_size.label}
                                not={true}
                                number={_size.number} />
                        }
                    })}
                </div>
            }
        </>
    );
};

export default ProductSizes;