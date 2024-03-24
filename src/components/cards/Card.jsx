import React, {
    useEffect,
    useState,
} from 'react';
import {
    useDispatch,
    useSelector,
} from 'react-redux';

import { actionDeleteProductCard } from '../../redux/actions/actions';

import './Card.css';

const Card = () => {

    const selector = useSelector(state => state.card.items);
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        let result = 0;
        selector.map(item => {
            result += Number(item.price);
            setSum(result);
        });
    });

    return (
        <>
            {selector.length > 0
                ?
                <div>
                    <h1>Ваша корзина</h1>
                    <p>Итоговая сумма: <strong>{sum}</strong> р.</p>
                    <div className='wrapper__products-card'>
                        {
                            selector.map((item, index) => {
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
                                        <button data-del={index}
                                        onClick={(e) => dispatch(actionDeleteProductCard(Number(e.target.getAttribute('data-del'))))}>Удалить</button>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                : 'Ваша корзина пустаЮ добавьте товары'
            }
        </>
    );
};

export default Card;