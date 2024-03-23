import React from 'react';

const InputSize = ({ availableId, not, label, number }) => {
    return (
        <div
            className='aside__radio-size-product'
            key={availableId}>
            <input
                type='radio'
                name='size'
                disabled={not}
                id={'select_size_' + availableId}
                className='input__radio-product'
            />
            <label
            className='label__product' 
            htmlFor={'select_size_' + availableId}>{label + '-' + number}</label>
        </div>

    );
};

export default InputSize;