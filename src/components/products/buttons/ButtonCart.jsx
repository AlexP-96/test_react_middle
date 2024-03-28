import React from 'react';
import { addProductCart } from '../../../toolkitRedux/reducers/cartSlice';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import {
    countsImagesProductSelector,
    currentProductPriceSelector,
    nameColorsProductSelector,
    productNameSelector,
    selectedSizeProductSelector,
} from '../../../toolkitRedux/selectors';

const ButtonCart = () => {

    const dispatch = useDispatch();

    const productName = useSelector(productNameSelector);
    const nameColorsProduct = useSelector(nameColorsProductSelector);
    const currentProductPrice = useSelector(currentProductPriceSelector);
    const selectedSizeProduct = useSelector(selectedSizeProductSelector);
    const countsImagesProduct = useSelector(countsImagesProductSelector);

    const handlerCardProduct = () => {
        if (selectedSizeProduct === null) {
            alert('Размер не выбран, выберите размер');
        } else {
            let objData = {
                productName: null,
                productColor: null,
                productSize: null,
                price: null,
                image: null,
            };

            objData.productName = productName;
            objData.productColor = nameColorsProduct;
            objData.price = currentProductPrice;
            objData.productSize = selectedSizeProduct;
            objData.image = countsImagesProduct[0];

            dispatch(addProductCart(objData));
        }
    };

    return (
        <button
            className='to__card-product'
            onClick={handlerCardProduct}
        >
            В корзину
        </button>
    );
};

export default ButtonCart;