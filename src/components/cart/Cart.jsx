import React, {
    useEffect,
} from 'react';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import {
    actionAddProductCard,
    actionDeleteProductCard,
    actionResultPriceCart,
} from '../../redux/actions/actions';
import './Cart.css';
import {
    cartItemsSelector,
    cartResulPrice,
} from '../../redux/store/selectors';

const Card = () => {
    const dispatch = useDispatch();

    const cardItems = useSelector(cartItemsSelector);
    const resultPrice = useSelector(cartResulPrice);

    useEffect(() => {
        let result = 0;
        cardItems.map(item => {
            result += Number(item.price);
            dispatch(actionResultPriceCart(result));
        });
    });
    useEffect(() => {

    }, []);

    return (
        <>
            {cardItems.length > 0
                ? (
                    <div>
                        <h1>Ваша корзина</h1>
                        <p>Итоговая сумма: <strong>{resultPrice}</strong> р.</p>
                        <div className='wrapper__products-card'>
                            {
                                cardItems.map((item, index) => {
                                    return (
                                        <div
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
                                                onClick={(e) => dispatch(actionDeleteProductCard(Number(e.target.getAttribute(
                                                    'data-del'))))}
                                            >
                                                Удалить
                                            </button>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                )
                : 'Ваша корзина пуста, добавьте товары'
            }
        </>
    );
};

export default Card;