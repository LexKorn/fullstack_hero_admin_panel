import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['Heroes', 'Filters'],
    endpoints: builder => ({
        getHeroes: builder.query({
            query: () => '/heroes',
            providesTags: ['Heroes']
        }),
        addHero: builder.mutation({
            query: hero => ({
                url: '/heroes/post',
                method: 'POST',
                body: hero
            }),
            invalidatesTags: ['Heroes']
        }),
        deleteHero: builder.mutation({
            query: id => ({
                url: `/heroes/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Heroes']
        }),
        getFilters: builder.query({
            query: () => '/filters',
            providesTags: ['Filters']
        })
    })
});

export const { useGetHeroesQuery, useAddHeroMutation, useDeleteHeroMutation, useGetFiltersQuery } = apiSlice;