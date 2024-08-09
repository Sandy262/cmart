// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/orders" }),
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (order) => {
        return {
          url: "/",
          method: "POST",
          body: order,
          headers: {
            token: window.localStorage.getItem("token"),
          },
        };
      },
    }),
    deleteOrder: builder.mutation({
      query: (order) => {
        return {
          url: `/${order.id}`,
          method: "DELETE",
          body: order,
          headers: {
            token: window.localStorage.getItem("token"),
          },
        };
      },
    }),
    getAllOrders: builder.query({
      query: () => {
        return {
          url: "/",
          method: "GET",
          headers: {
            token: window.localStorage.getItem("token"),
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { usePlaceOrderMutation, useGetAllOrdersQuery,useLazyGetAllOrdersQuery,useDeleteOrderMutation } = orderApi;
