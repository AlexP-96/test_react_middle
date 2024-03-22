import React, { useState } from 'react';
import './ProductColor.css'

const ProductColor = ({ colors }) => {

    const [checkedInput, setCheckedInput] = useState(true);
    const [idColor, setIdColor] = useState(0);

    const handlerChecked = (e, indexId) => {
        setCheckedInput(e.target.checked = checkedInput);
        setIdColor(indexId);
    }
    const iterateColorName = () => {
        return (
            colors.map((_color, index) => {
                return (
                    <div
                        className='wrapper__color'
                        key={index}>
                        <input
                            onChange={(e) => handlerChecked(e, index)}
                            defaultChecked={index === 0}
                            type="radio"
                            name='color'
                            id={'color_' + index} />
                        <label htmlFor={'color_' + index}>{_color.name}</label>
                    </div>
                )
            }))
    }

    return (
        <div className='color__product'>
            Цвет: {iterateColorName()}
        </div>
    );
};

export default ProductColor;