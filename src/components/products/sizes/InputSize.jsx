import React from 'react';
import './ProductSize.css';

const InputSize = ({ availableId, nothing, label, number }) => {

    return (
        <div
            className='aside__radio-size-product'
            key={availableId}>
            <input
                type='radio'
                name='size'
                disabled={nothing}
                id={'select_size_' + availableId}
                className='input__radio-product'
            />
            <label
                className={'label__product'}
                htmlFor={'select_size_' + availableId}>{label + '-' + number}</label>
            <br />
        </div>

    );
};

export default InputSize;