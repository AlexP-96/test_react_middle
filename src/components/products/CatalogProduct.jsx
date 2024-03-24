import React, {
    useEffect,
    useState,
} from 'react';

import ProductList from './ProductList';

import { getProducts } from '../../services/api';

const CatalogProduct = () => {

    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data);
            setLoader(true);
        });

    }, []);

    const iterateCatalogItems = () => {

        return (
            products.map(item => {
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
                {loader &&
                    iterateCatalogItems()
                }
            </div>
        </div>
    );
};

export default CatalogProduct;