import React, {
    useState,
} from 'react';
import './ProductColor.css';
import {
    useDispatch,
} from 'react-redux';
import {
    actionColor,
    actionImageNext,
} from '../../../redux/actions/actions';

const ProductColor = ({ colors }) => {
    const dispatch = useDispatch();
    const [checkedInput, setCheckedInput] = useState(true);

    const handlerChecked = (e, idColor) => {
        dispatch(actionColor(idColor));
        setCheckedInput(e.target.checked = checkedInput);
        dispatch(actionColor(idColor));
        dispatch(actionImageNext(0));
    };

    const iterateColorName = () => {
        return (
            colors.colors.map((_color, index) => {
                return (
                    <div
                        className='wrapper__color'
                        key={_color.id}
                    >
                        <input
                            onChange={(e) => handlerChecked(e, _color.id)}
                            defaultChecked={index === 0}
                            type='radio'
                            name='color'
                            className='input__radio-product'
                            id={'color_' + index}
                        />
                        <label
                            htmlFor={'color_' + index}
                            className='label__color-product'
                        >{_color.name}</label>
                    </div>
                );
            }));
    };

    return (
        <div className='color__product'>
            <div className='title__sizes-product'>Доступные цвета:</div>
            <div className='aside__colors'>
                {
                    colors.colors &&
                    iterateColorName()
                }
            </div>
        </div>
    );
};

export default ProductColor;