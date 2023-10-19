import { WishlistResponse } from "@/@types/@types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
    credentials: "include",
  }),

  reducerPath: "apis",
  tagTypes: ["singleProperty", "allProperties", "location", "wishlist"],
  endpoints: (build) => ({
    getAllProperties: build.query({
      query: ({ location, search, sort, numericFilters, page }) => ({
        url: "properties",
        method: "GET",
        params: { search, sort, location, numericFilters, page },
      }),

      providesTags: ["allProperties"],
    }),
    getLocations: build.query({
      query: () => "location",
      providesTags: ["location"],
    }),
    getWishlist: build.query<WishlistResponse, void>({
      query: () => "wishlist",
      providesTags: ["wishlist"],
    }),
  
    addItemToWishlist: build.mutation({
      query: (id) => ({
        url: `wishlist`,
        method: "POST",
        body: { property: id },
      }),
      invalidatesTags: ["wishlist"],
  }),
  removeItemFromWishlist:build.mutation({
    query(arg) {
      return {
        url: `wishlist/${arg}`,
        method: "DELETE",
      };
    },
  })
  }),
});

export const { useGetAllPropertiesQuery, useGetLocationsQuery, useAddItemToWishlistMutation, useGetWishlistQuery, useRemoveItemFromWishlistMutation} = api;
