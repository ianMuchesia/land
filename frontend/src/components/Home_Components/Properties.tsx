import React from 'react'

import axios from 'axios';
import { typeProperties } from '@/@types/@types'
import Link from 'next/link';
import Homeproperty from './Homeproperty';
import { useGetAllPropertiesQuery } from '@/redux/services/Api';

interface Props{
  properties: typeProperties[];

}

const Properties = ({properties}:Props) => {


  return (
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <div>
      <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
       Featured
      </p>
    </div>
    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
      <span className="relative inline-block">
      
        <span className="relative">Whats</span>
      </span>{' '}
    New Today
    </h2>
    <p className="text-base text-gray-700 md:text-lg">
      
    </p>
    </div> 
    
    <div className="flex flex-wrap items-center justify-center gap-4">
    {
           properties.map((property) => (
              <Homeproperty key={property?._id} property={property} />
            ))}
    </div>
   <div className="flex items-center justify-center my-10">
   <Link
              href="/properties"
              className="inline-flex bg-green-700 text-white items-center justify-center h-12 lg:h-16 px-6  mr-6 font-medium tracking-wide text-green hover:text-gray-800 hover:bg-white transition duration-200 rounded shadow-md bg-deep-green-200 hover:focus:shadow-outline focus:outline-none xl:text-xl"
            >
             More
            </Link>
   </div>
    </div>
  )
}

export default Properties