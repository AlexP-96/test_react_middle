import React, {
    useEffect,
} from 'react';

import ProductList from './ProductList';

import { getProducts } from '../../services/api';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import {
    listProductSelector,
    listProductsIsLoadingSelector,
} from '../../redux/store/selectors';


const CatalogProduct = () => {

    const listProducts = useSelector(listProductSelector);
    const isLoadingListProducts = useSelector(listProductsIsLoadingSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());

    }, []);

    const iterateCatalogItems = () => {

        return (
            listProducts.map(item => {
                return (
                    <ProductList
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.colors[0].images}
                    />
                );
            })
        );
    };

    return (
        <div className='container'>
            <div className='product__container'>
                {isLoadingListProducts && 'Загрузка списка товаров...'}
                {!isLoadingListProducts && iterateCatalogItems()}

            </div>
        </div>
    );
};

export default CatalogProduct;