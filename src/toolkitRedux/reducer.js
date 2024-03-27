import {
    createReducer,
    createAction,
} from '@reduxjs/toolkit';

const initialState = {
    isLoading: true,
    nameProduct: '',
    idColor: null,
    countImage: 0,
    selectSize: null,
    dataColor: [],
    data: [],
};

const addToStateProduct = createAction('GET_DATA_PRODUCT');

export default createReducer(initialState, {
    [addToStateProduct]: (state, payload) => {
        state.data.push();
    },
});