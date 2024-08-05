    // Need to use the React-specific entry point to import createApi
    import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

    // Define a service using a base URL and expected endpoints
    export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/products' }),
    endpoints: (builder) => ({
        addNewProduct: builder.mutation({
        query: (product) =>{
            return {
                url:'/',
                method:'POST',
                body:product,
                headers:{
                    token:window.localStorage.getItem('token')
                }
            }
        }
        }),
    }),
    })

    // Export hooks for usage in functional components, which are
    // auto-generated based on the defined endpoints
    export const { useAddNewProductMutation } = productApi