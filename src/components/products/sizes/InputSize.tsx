import React, {
    useEffect,
} from 'react';
import classNames from 'classnames';
import './ProductSize.css';
import {
    useDispatch,
} from 'react-redux';
import { currentSelectSize } from '../../../toolkitRedux/reducers/productSlice';

const InputSize = ({
    availableId,
    nothing,
    label,
    number,
}) => {
    const dispatch = useDispatch();

    useEffect(() => () => {
        dispatch(currentSelectSize(null));
    }, []);

    return (
        <div className='aside__radio-size-product'>
            <input
                type='radio'
                name='size'
                disabled={!nothing}
                onChange={(e) => dispatch(currentSelectSize(e.target.value))}
                value={label}
                id={'select_size_' + availableId}
                className='input__radio-product'
            />
            <label
                className={classNames('label__product', { 'not_size': !nothing })}
                htmlFor={'select_size_' + availableId}
            >
                {label + ' - ' + number}
            </label>
        </div>

    );
};

export default InputSize;