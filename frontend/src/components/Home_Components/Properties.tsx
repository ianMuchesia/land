import React from 'react'
import HomeProperty from './HomeProperty'
import axios from 'axios';
import { typeProperties } from '@/@types/@types'
interface Props {
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
    {properties &&
            properties.map((property) => (
              <HomeProperty key={property._id} property={property} />
            ))}
    </div>
    </div>
  )
}

export default Properties