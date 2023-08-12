import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import React from 'react'

const Faq = () => {
  return (
    <div className=" bg-no-repeat bg-cover px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      
      <div className="max-w-screen-xl sm:mx-auto  ">
      
           <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto md:grid-cols-2 xl:grid-cols-4">
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <Icon icon="majesticons:search" className="w-16 h-16  text-green-800" />
            </div>
          </div>
          <div>
          
            <p className="mb-3 text-sm text-gray-800">
            Whether you are looking for a residential plot, commercial space, or agricultural land, our platform provides a seamless and efficient way to discover and explore a wide range of land listings from various locations.
            </p>
          
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <Icon icon="solar:filter-bold-duotone" className="w-16 h-16  text-green-800" />
            </div>
          </div>
          <div>
         
            <p className="mb-3 text-sm text-gray-800">
            We understand that finding the right land can be a complex and time-consuming process. That's why we have built an intuitive search system that allows you to filter and narrow down your options based on your specific requirements. Our extensive database of land listings ensures that you have access to a diverse selection of properties to choose from.
            </p>
           
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <Icon
                icon="carbon:event"
                className="w-10 h-10" text-green-800
              />
            </div>
          </div>
          <div>
        
            <p className="mb-3 text-sm text-gray-800">
            In addition to browsing through listings, our website also facilitates direct communication between potential buyers and sellers. You can easily contact the sellers, inquire about the details, and schedule site visits directly through our platform. We strive to provide a seamless and transparent experience throughout the land buying process.
            </p>
          
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <Icon
                icon="carbon:event"
                className="w-16 h-16  text-green-800"
              />
            </div>
          </div>
          <div>
        
            <p className="mb-3 text-sm text-gray-800">
            Whether you are a first-time buyer or an experienced investor, Land Listing is your trusted companion in finding the right land for your needs. Start your search today and embark on a journey towards owning your dream property.
            </p>
          
          </div>
        </div>
        
      </div>
        
      </div>
    </div>
  )
}

export default Faq