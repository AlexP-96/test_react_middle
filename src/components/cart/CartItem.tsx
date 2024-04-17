import React from 'react';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import { cartItemsSelector } from '../../toolkitRedux/selectors';
import { deleteProductCart } from '../../toolkitRedux/reducers/cartSlice';

const CartItem = () => {

    const cardItems = useSelector(cartItemsSelector);
    const dispatch = useDispatch();

    const handlerDelProduct = (e) => {
        return (dispatch, getState) => {
            dispatch(deleteProductCart(Number(e.target.getAttribute(
                'data-del'))));
            localStorage.setItem('cart', JSON.stringify(getState().cart.items));
        };
    };
    return (
        <>
            {cardItems.map((item, index) => {
                return (<div
                    key={index}
                    className='wrapper__product-card'
                >
                    <img
                        src={item.image}
                        alt='image'
                    />
                    <h4>{item.productName}</h4>
                    <div>Цвет: {item.productColor}</div>
                    <div>Размер: {item.productSize}</div>
                    <div>Цена: {item.price}</div>
                    <button
                        data-del={index}
                        onClick={(e) => dispatch(handlerDelProduct(e))}
                    >
                        Удалить
                    </button>
                </div>);
            })}
        </>
    );
};

export default CartItem;