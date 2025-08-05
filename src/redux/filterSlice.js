// src/redux/filterSlice.js
import {
    createSlice
} from '@reduxjs/toolkit';

const initialState = {
    title: '',
    description: '',
    completed: null,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            return {
                ...state,
                ...action.payload
            };
        },
        resetFilter: () => initialState,
    },
});

export const {
    setFilter,
    resetFilter
} = filterSlice.actions;
export default filterSlice.reducer;