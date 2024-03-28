import React, { useEffect } from 'react';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import {
    cartItemsSelector,
    cartResulPrice,
} from '../../toolkitRedux/selectors';
import { totalPriceCart } from '../../toolkitRedux/reducers/cartSlice';

const TotalPrice = () => {
    const dispatch = useDispatch();
    const resultPrice = useSelector(cartResulPrice);
    const cardItems = useSelector(cartItemsSelector);

    useEffect(() => {
        let result = 0;
        cardItems.map(item => {
            result += Number(item.price);
            dispatch(totalPriceCart(result));
        });

        if (cardItems.length === 0) {
            dispatch(totalPriceCart(0));
        }
    });
    return (
        <>
            <p className='text__total-sum'>Итоговая сумма: <strong>{resultPrice}</strong> р.</p>
        </>
    );
};

export default TotalPrice;