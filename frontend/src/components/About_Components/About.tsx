import React from 'react'

const About = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <div>
      <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
      About Us
      </p>
    </div>
    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
      <span className="relative inline-block">
        <svg
          viewBox="0 0 52 24"
          fill="currentColor"
          className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
        >
          <defs>
            <pattern
              id="27df4f81-c854-45de-942a-fe90f7a300f9"
              x="0"
              y="0"
              width=".135"
              height=".30"
            >
              <circle cx="1" cy="1" r=".7" />
            </pattern>
          </defs>
          <rect
            fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
            width="52"
            height="24"
          />
        </svg>
        <span className="relative">Welcome</span>
      </span>{' '}
      to Land Listing
      
    </h2>
    <p className="text-base text-gray-700 md:text-lg">
    your ultimate destination for finding the perfect land. Our platform provides a seamless and efficient way to explore a diverse range of land listings from various locations. 
        Discover your dream property and connect with trusted sellers through Land Listing.
    </p>
  </div> </div>
  )
}

export default About