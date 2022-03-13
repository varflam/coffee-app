import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coffeeApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000'
    }),
    endpoints: builder => ({
        getCoffee: builder.query({
            query: () => '/coffee'
        }),
        getSingleCoffee: builder.query({
            query: id => `/coffee/${id}`
        }),
        getCounries: builder.query({
            query: () =>  '/countries'
        })
    })
});

export const { useGetCoffeeQuery, useGetSingleCoffeeQuery, useGetCounriesQuery } = coffeeApiSlice;