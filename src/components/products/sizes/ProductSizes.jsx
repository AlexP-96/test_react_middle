import React, { useEffect } from 'react';

import { getSizes, getSize } from '../../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetSizesProduct, actionIsLoaderProductSize } from '../../../redux/action/actions';

const ProductSizes = ({ size }) => {

    const dispatch = useDispatch();
    const selectorSize = useSelector(state => state.getSizeProduct)
    console.log(selectorSize.isLoader)
    useEffect(() => {
        getSizes().then(data => {
            dispatch(actionIsLoaderProductSize(false));
            dispatch(actionGetSizesProduct(data));
        }).catch(err => {
            dispatch(actionIsLoaderProductSize(true));
            console.log(err);
        })
    }, [])

    console.log(selectorSize.data);
    console.log(selectorSize.isLoader)

    return (
        <>
            {/* {!selectorSize.isLoader &&
                selectorSize.data.map(_size => {
                    return (
                        <div
                            className='aside__radio-size-product'
                            key={_size.id}>
                            <input
                                type='radio'
                                id={'label_id_' + 2}
                                className='input__radio-product'
                            />
                            <label htmlFor={'label_id_' + 2}>{_size.label + '-' + _size.number}</label>
                        </div>
                    )
                })
            } */}
        </>
    );
};

export default ProductSizes;