import { PaginationAction, PaginationState, typeProperties } from '@/@types/@types';
import DataLoader from '@/Loader/DataLoader';
import Loader from '@/Loader/Loader';
import { Filter, Pagination, Property } from '@/components/Properties_Components'
import { useGetAllPropertiesQuery } from '@/redux/services/Api';
import Head from 'next/head'
import React, { useReducer, useState } from 'react'
interface queryData {
  data: {
    nbHits: number;
    properties: typeProperties[];
    totalProperties: number;
  };
  isLoading: boolean;
  isSuccess:boolean;
}

const initialState : PaginationState ={
  currentPage: 1,
}


const properties = () => {



  const [filter, setFilter] = useState({
    location: "",
    sort: "",
    price_min: 50000,
    price_max: "",
    size_max: "",
    size_min: "",
    search: "",
  });

  const { data, isLoading, isSuccess } = useGetAllPropertiesQuery<queryData>({
    location: filter.location,
    sort: filter.sort,
    numericFilters: `area<=${filter.size_max},price>=${filter.price_min}`,
    search: filter.search,

  });


   //pagination logic
   
  

   


  
  return (
   <>
    <Head>
        <title>Properties</title>
        <meta name="description" content="See the available lands for sale" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Filter setFilter={setFilter} filter={filter}/>
      {!isLoading && 
        <h4 className='text-center my-10 text-2xl'> {data?.totalProperties} {data?.nbHits !== 1 ? "properties" : "property"}{" "}
        found</h4>}
    
    {isLoading && <div className="flex items-center justify-center">
    <DataLoader/>
    </div>}
   
    {data?.nbHits > 0 &&
            data?.properties.map((property) => (
              <Property property={property} key={property._id} />
            ))}
     
 

   </>
  )
}

export default properties