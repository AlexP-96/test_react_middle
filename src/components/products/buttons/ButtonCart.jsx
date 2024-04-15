import React from 'react';
import { addProductCart } from '../../../toolkitRedux/reducers/cartSlice';
import {
    useDispatch,
} from 'react-redux';


const funcTest = () => {

    }

    const handlerCardProduct = () => (dispatch, getState) => {
    const {
        product,
    } = getState();

    const {
        nameProduct,
        selectSize,
        dataColor,
    } = product;

    const {
        name,
        price,
        images,
    } = dataColor;

            if (selectSize === null) {
                alert('Размер не выбран, выберите размер');
            } else {
                let objData = {
                    productName: null,
                    productColor: null,
                    productSize: null,
                    price: null,
                    image: null,
                };

                objData.productName = nameProduct;
                objData.productColor = name;
                objData.price = price;
                objData.productSize = selectSize;
                objData.image = images[0];

                dispatch(addProductCart(objData));

                const { cart } = getState();

                localStorage.setItem('cart', JSON.stringify(cart.items));

    }
};

const ButtonCart = () => {
    const dispatch = useDispatch();

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