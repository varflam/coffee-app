import { configureStore } from '@reduxjs/toolkit';
import { coffeeApiSlice } from '../api/apiSlice';
import filters from '../features/coffeeFilter/coffeeFilterSlice';

export const store = configureStore({
  reducer: {
    filters,
    [coffeeApiSlice.reducerPath]: coffeeApiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(coffeeApiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
});
