import React, { useEffect } from 'react';

import { getSizes, getSize } from '../../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetSizesProduct, actionIsLoaderProductSize } from '../../../redux/action/actions';
import InputSize from './InputSize';

const ProductSizes = ({ size }) => {
    const dispatch = useDispatch();
    const selectorProduct = useSelector(state => state.getProduct)
    const selectorSize = useSelector(state => state.getSizeProduct)

    useEffect(() => {
        getSizes().then(data => {
            dispatch(actionIsLoaderProductSize(false));
            dispatch(actionGetSizesProduct(data));
        }).catch(err => {
            dispatch(actionIsLoaderProductSize(true));
            console.log(err);
        })

        getSize(selectorProduct.idColor).then(data => console.log(data))
        return () => {
            dispatch(actionIsLoaderProductSize(true));
        }
    }, []);


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

                        return <InputSize
                            key={_size.id}
                            availableId={_size.id}
                            label={_size.label}
                            nothing={size.includes(_size.id) ? false : true}
                            number={_size.number}
                        />

                    })}
                </div>
            }
        </>
    );
};

export default ProductSizes;