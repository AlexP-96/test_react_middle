import React, { useState } from 'react';
import './ProductColor.css'
import { useDispatch } from 'react-redux';
import { actionColor } from '../../../redux/action/actions';

const ProductColor = ({ colors }) => {
    const dispatch = useDispatch();
    // const selectorColor = useSelector(state => state.getProduct)
    const [checkedInput, setCheckedInput] = useState(true);

    const handlerChecked = (e, idColor) => {
        dispatch(actionColor(idColor));
        setCheckedInput(e.target.checked = checkedInput);
        dispatch(actionColor(idColor))
    }
    // console.log(colors)
    const iterateColorName = () => {
        return (
            colors.colors.map((_color, index) => {
                return (
                    <div
                        className='wrapper__color'
                        key={_color.id}>
                        <input
                            onChange={(e) => handlerChecked(e, _color.id)}
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
            <div className="title__sizes-product">Доступные цвета:</div>
            {
                colors.colors &&
                iterateColorName()
            }
        </div>
    );
};

export default ProductColor;