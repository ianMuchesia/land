import { Location, typeLocation } from '@/@types/@types';
import { useGetLocationsQuery } from '@/redux/services/Api'
import React, { memo } from 'react'
interface Props{
    handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;

}
const Location =memo(function Location({handleChange}:Props){

    const {data, error} = useGetLocationsQuery<{data:{locations:Location[]}, error:Error}>({})


  return (
   
    <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
    name="location"  onChange={handleChange}
    >
      <option value="">-Choose Location-</option>
       {data?.locations && data?.locations.map(location=>(
   <option value={location._id} key={location._id}>{location.name}</option>
 
 ))}
 {error && <option value="">{error.message}</option>}
    </select>
  )
})

export default Location