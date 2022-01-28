import { configureStore } from '@reduxjs/toolkit';
import { coffeeApiSlice } from '../api/apiSlice';

export const store = configureStore({
  reducer: {
    [coffeeApiSlice.reducerPath]: coffeeApiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(coffeeApiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
});
