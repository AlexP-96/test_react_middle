import React, { useEffect } from 'react';

import {
    Routes,
    Route,
} from 'react-router-dom';

import './styles/zero.css';

import Header from './components/header/Header';
import CatalogProduct from './components/products/catalog_products/CatalogProduct';
import Card from './components/cart/Cart';
import SingleProduct from './components/products/SingleProduct';
import WrapperSingleProduct from './components/products/WrapperSingleProduct';
import {
    useDispatch,
} from 'react-redux';

import { addProductCart } from './toolkitRedux/reducers/cartSlice';

export default function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        let dataCartLocalStorage = localStorage.getItem('cart');

        if (JSON.parse(dataCartLocalStorage) !== null && JSON.parse(dataCartLocalStorage).length > 0) {

            JSON.parse(dataCartLocalStorage).map(items => {
                dispatch(addProductCart(items));
            });
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
