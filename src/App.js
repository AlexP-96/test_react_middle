import React, { useEffect } from 'react';

import {
    Routes,
    Route,
} from 'react-router-dom';

import './zero.css';

import Header from './components/header/header';
import CatalogProduct from './components/products/CatalogProduct';
import Card from './components/cart/Cart';
import SingleProduct from './components/products/SingleProduct';
import WrapperSingleProduct from './components/products/WrapperSingleProduct';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import { cartItemsSelector } from './redux/store/selectors';
import {
    actionAddProductCard,
} from './redux/actions/actions';

export default function App() {

    const productsCart = useSelector(cartItemsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        let dataCartLocalStorage = localStorage.getItem('cart');
        // console.log(JSON.parse(dataCartLocalStorage).length);
        if (JSON.parse(dataCartLocalStorage) !== null && JSON.parse(dataCartLocalStorage).length > 0) {

            JSON.parse(dataCartLocalStorage).map(items => {
                dispatch(actionAddProductCard(items));
            });

            console.log('yep');
        }
    }, []);

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route
                    path='/catalog'
                    element={<CatalogProduct />}
                />
                <Route
                    path='/card'
                    element={<Card />}
                />
                <Route
                    path={'/product/:product_id'}
                    element={
                        <WrapperSingleProduct>
                            <SingleProduct />
                        </WrapperSingleProduct>
                    }
                />
            </Routes>
        </div>
    );
}
