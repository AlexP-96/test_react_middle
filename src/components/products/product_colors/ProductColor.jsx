import React, {
    useState,
} from 'react';
import './ProductColor.css';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import {
    currentIdColorProduct,
    nextCountVisibleImageProduct,
} from '../../../toolkitRedux/reducers/productSlice';
import {
    dataProductSelector,
    productDataColorsSelector,
} from '../../../toolkitRedux/selectors';

const ProductColor = ({ colors }) => {
    const dispatch = useDispatch();
    const productData = useSelector(productDataColorsSelector);
    const [checkedInput, setCheckedInput] = useState(true);

    const handlerChecked = (e, idColor) => {
        dispatch(currentIdColorProduct(idColor));
        setCheckedInput(e.target.checked = checkedInput);
        dispatch(nextCountVisibleImageProduct(0));
    };

    const iterateColorName = () => {
        return (
            productData.map((_color, index) => {
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
                    productData &&
                    iterateColorName()
                }
            </div>
        </div>
    );
};

export default ProductColor;