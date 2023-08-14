
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../baseURL";



export const api = createApi({
    baseQuery : fetchBaseQuery({baseUrl: `${baseURL}`}),

    reducerPath: "apis",
    tagTypes: [
        "singleProperty",
        "allProperties",
        "allCustomers"
    ],
    endpoints: (build)=>({
        getAllProperties:build.query({
            query:({location , search , sort,numericFilters, page})=>({
                url: "properties",
                method: "GET",
                params: {search , sort , location, numericFilters, page}
            }),
            
        providesTags: ['allProperties']
        }),
        getAllCustomers:build.query({
            query:({requestType, search, page, sort})=>({
                url:"communication",
                method:"GET",
                params:{search, page, requestType, sort}
            }),
            providesTags:["allCustomers"]
        })
    })
   
})

export const {useGetAllPropertiesQuery, useGetAllCustomersQuery} = api