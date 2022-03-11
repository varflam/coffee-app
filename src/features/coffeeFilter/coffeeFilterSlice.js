import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filterCountry: 'All',
    filterName: ''
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilterCountry: (state, action) => {
            state.filterCountry = action.payload;
        },
        setFilterName: (state, action) => {
            state.filterName = action.payload;
        }
    }
});

export const { setFilterCountry, setFilterName } = filtersSlice.actions;

export default filtersSlice.reducer;