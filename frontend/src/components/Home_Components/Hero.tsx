import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
 
 
  <section
    className="mt-5"
  >
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-2xl lg:absolute xl:px-0">
       
             <svg
          className="absolute left-0 hidden h-full text-green-400 transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        
        <img
          className="object-fill w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="/land_sales.jpeg"
          alt=""
        />
      
        
       
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-20 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            LAND LISTING
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl xl:text-7xl xl:mb-2 sm:leading-none">
          Discover{' '}
            <br className="hidden md:block" />
            Your Perfect{' '}
            <span className="inline-block text-deep-purple-accent-400">
              is real
            </span>
          </h2>
          <p className="pr-5 mb-5 text-lg sm:text-xl text-gray-700 md:text-lg">
          Explore an extensive collection of premium land listings, carefully curated to meet your diverse needs and aspirations.
          </p>
          <div className="flex items-center">
            <Link
              href="/properties"
              className="inline-flex  items-center justify-center h-12 lg:h-16 px-6  mr-6 font-medium tracking-wide text-green hover:text-white transition duration-200 rounded shadow-md bg-deep-green-200 hover:bg-green-700 focus:shadow-outline focus:outline-none xl:text-xl"
            >
              Get started
            </Link>
            <Link
              href="/about"
              aria-label=""
              className="inline-flex h-12 lg:h-16 border-2 px-6 text-black  mr-6  bg-green-400 items-center font-semibold  transition-colors duration-200 hover:bg-white hover:text-black rounded xl:text-xl"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero