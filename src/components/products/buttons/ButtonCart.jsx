import React from 'react';
import { addProductCart } from '../../../toolkitRedux/reducers/cartSlice';
import {
    useDispatch,
    useSelector,
} from 'react-redux';

const ButtonCart = () => {

    const dispatch = useDispatch();

    const handlerCardProduct = () => {
        return (dispatch, getState) => {
            if (getState().product.selectSize === null) {
                alert('Размер не выбран, выберите размер');
            } else {
                let objData = {
                    productName: null,
                    productColor: null,
                    productSize: null,
                    price: null,
                    image: null,
                };

                if (getState().cart.items.length !== 0) {
                    localStorage.setItem('cart', JSON.stringify(getState().cart.items));
                }

                objData.productName = getState().product.nameProduct;
                objData.productColor = getState().product.dataColor.name;
                objData.price = getState().product.dataColor.price;
                objData.productSize = getState().product.selectSize;
                objData.image = getState().product.dataColor.images[0];

                dispatch(addProductCart(objData));
            }
        };
    };

    return (
        <button
            className='to__card-product'
            onClick={() => dispatch(handlerCardProduct())}
        >
            В корзину
        </button>
    );
};

export default ButtonCart;