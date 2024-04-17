import { useEffect } from 'react';

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

interface IProductInCart {
    image: string;
    price: string;
    productColor: string;
    productName: string;
    productSize: string;
}

export default function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        let dataCartLocalStorage: Array<IProductInCart> = JSON.parse(localStorage.getItem('cart'));

        if (dataCartLocalStorage !== null && dataCartLocalStorage.length) {

            dataCartLocalStorage.map(items => {
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
