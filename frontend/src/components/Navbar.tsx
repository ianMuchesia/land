import React, { useState } from "react";
import { Icon } from '@iconify/react';
import Link from "next/link";
import { useAppSelector } from "@/redux/Hooks";
import { Logout } from "./Modals";

const Navbar = () => {

  const wish = useAppSelector(state=>state.wish.total)

  const user = useAppSelector(state=>state.auth)
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ isModalOpen , setIsModalOpen ]= useState(false)

  const handleCloseToggle=()=>{
    setIsMenuOpen(false)
  }
  return (
    <div className="bg-white fixed top-0 left-0 right-0 h-18 z-[9999]">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
               <svg
                className="w-8 "
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
             
              <span className="ml-2 text-xl font-bold tracking-wide text-black uppercase">
                Land Listing
              </span>
            </Link>
            <ul className=" items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  href="/properties"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-black transition-colors duration-200 hover:"
                >
                  Properties
                </Link>
              </li>
            
             
              
              <li>
                <Link
                  href="/about"
                  aria-label="About us"
                  title="About us"
                  className="font-medium tracking-wide text-black transition-colors duration-200 hover:"
                >
                  About us
                </Link>
              </li>
            </ul>
          </div>
          <ul className=" items-center hidden space-x-8 lg:flex">
           {!user.isAuthenticated && <li>
              <Link
                href="/login"
                aria-label="Sign in"
                title="Sign in"
                className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-green-400"
              >
                Sign in
              </Link>
            </li>}
            {user.isAuthenticated && <li>
              <Link
                href="/"
                aria-label="home"
                title="home"
                className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-green-400"
              >
                Welcome {user.user.name}
              </Link>
            </li>}
            {!user.isAuthenticated && <li>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </Link>
            </li>}
            {user.isAuthenticated && <li>
              <button
                onClick={()=>setIsModalOpen(true)}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign Out
              </button>
            </li>}
          {wish>0 &&  <li className="relative flex">
              <Link
                href="/wishlist"
                className=""
                aria-label="WishList"
                title="WishList"
              >
               <Icon icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" className="text-9 h-10 w-9" />
              </Link>
              <span className="absolute right-0 top-0 rounded-full bg-green-800 w-5 h-5 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                  {wish}
                </span>
            </li>}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
             
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                className="w-8 "
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
             
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Land Listing
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Icon icon="ic:baseline-close"
                        className="w-5 text-gray-600" viewBox="0 0 24 24"
                        />
                    
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li onClick={handleCloseToggle}>
                        <Link
                          href="/properties"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Properties
                        </Link>
                      </li>
                      <li onClick={handleCloseToggle}>
                        <a
                          href="#features"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Features
                        </a>
                      </li>
                    
                      <li onClick={handleCloseToggle}>
                        <Link
                          href="/about"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About us
                        </Link>
                      </li>
            {   wish>0 &&       <li onClick={handleCloseToggle} className=" flex items-center gap-2">
                        <Link
                          href="/wishlist"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Wishlist
                        </Link>
                        <span className="rounded-full bg-green-800 w-5 h-5 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                 {wish}
                </span>
                      </li>}
                     {!user.isAuthenticated && <li onClick={handleCloseToggle}>
                        <Link
                          href="/login"
                          aria-label="Sign in"
                          title="Sign in"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Sign in
                        </Link>
                      </li>}
                      {user.isAuthenticated && <li onClick={handleCloseToggle}>
                        <Link
                          href="/"
                          aria-label=""
                          title=""
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Welcome {user.user.name}
                        </Link>
                      </li>}
                     {!user.isAuthenticated && <li onClick={handleCloseToggle}>
                        <Link
                          href="/signup"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </Link>
                      </li>}
                     {user.isAuthenticated && <li>
                        <button 
                        onClick={()=>{setIsModalOpen(true)}}
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outline-none">
                          Sign Out
                        </button>
                      </li>}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && <Logout setIsModalOpen={setIsModalOpen}/>}
    </div>
  );
};

export default Navbar;
