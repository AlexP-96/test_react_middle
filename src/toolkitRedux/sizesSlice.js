import { createSlice } from '@reduxjs/toolkit';

const sizesSlice = createSlice({
    name: 'sizes',
    initialState: {
        isLoading: true,
        data: [],
    },
    reducers: {
        addToStateSizes(state, action) {
            state.data = action.payload;
        },
        isLoadingSizes(state, action) {
            state.isLoading = action.payload;
        },
    },
});

export default sizesSlice.reducer;

export const {
    addToStateSizes,
    isLoadingSizes,
} = sizesSlice.actions;