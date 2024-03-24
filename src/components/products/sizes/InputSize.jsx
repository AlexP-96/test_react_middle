import React, { useEffect } from 'react';
import './ProductSize.css';
import { useDispatch } from 'react-redux';
import { actionSelectSizeProduct } from '../../../redux/actions/actions';

const InputSize = ({
    availableId,
    nothing,
    label,
    number,
}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(actionSelectSizeProduct(null));
        };
    }, []);

    let clazz = nothing
        ? 'label__product not_size'
        : 'label__product';

    return (
        <div
            className='aside__radio-size-product'
            key={availableId}
        >
            <input
                type='radio'
                name='size'
                disabled={nothing}
                onChange={(e) => dispatch(actionSelectSizeProduct(e.target.value))}
                value={label}
                id={'select_size_' + availableId}
                className='input__radio-product'
            />
            <label
                className={clazz}
                htmlFor={'select_size_' + availableId}
            >{label + ' - ' + number}</label>
        </div>

    );
};

export default InputSize;