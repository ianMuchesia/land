import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Success = () => {
  return (
    <div className='grid place-items-center p-10 gap-4 transition duration-300 ease-in-out'><div className="h-16 w-16 bg-green-800 rounded-full flex items-center justify-center">
    <Icon icon="mdi:success-circle-outline" className="h-8 w-8 text-white " />
  </div>
  <h3 className="text-xl text-center  max-w-sm">Request Sent Successfully...</h3></div>
  )
}

export default Success