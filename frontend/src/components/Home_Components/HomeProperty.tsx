import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { typeProperties } from "@/@types/@types";
import { useAppDispatch } from "@/redux/Hooks";
import { addItem } from "@/redux/Features/wishlistSlice";
import { Phone, SMS, Whatsapp } from "../Modals";

interface Props{
    property:typeProperties;
}

const HomeProperty = ({property}:Props) => {

const dispatch= useAppDispatch()
const [modalState, setModalState] = useState({
  isPhone: false,
  isSMS: false,
  isWhatsapp: false,
});


  const handleAddToWishList=()=>{
    dispatch(addItem(property))
  }
  return (
    <div
      
      className="block rounded-lg p-4 shadow-sm shadow-indigo-100 bg-[#fafafa]"
    >
      <img
        alt="Home"
        src={property?.mainImage.url}
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div className="flex items-center justify-between">
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">Ksh. {property?.price}</dd>
          </div>
          <div onClick={handleAddToWishList}>
            <dt className="sr-only">WishList</dt>

            <dd className="text-sm text-gray-500">  <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg></dd>
          </div>
          </div>
          <div>
            <dt className="sr-only">Name</dt>

            <dd className="font-medium">{property?.title}</dd>
          </div>
        </dl>

        

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <Icon icon="mdi:location" className="h-4 w-4 text-green-800" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Location</p>

              <p className="font-medium">{property?.location.name}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <Icon icon="carbon:area" className="h-4 w-4 text-green-800" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Area</p>

              <p className="font-medium">
                {property?.area} m<sup>2</sup>
              </p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <Icon
              icon="fluent:presence-available-20-regular"
              className="h-4 w-4 text-green-800"
            />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Available</p>

              <p className="font-medium">Yes</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2" 	onClick={()=>setModalState((prev)=>({...prev,isPhone:true}))}>
            <Icon
              icon="solar:phone-outline"
              className="h-4 w-4 text-green-800"
            />
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
          	onClick={()=>setModalState((prev)=>({...prev,isSMS:true}))}
          >
            <Icon icon="ic:outline-sms" className="h-4 w-4 text-green-800" 
            
            />
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
          onClick={()=>setModalState((prev)=>({...prev,isWhatsapp:true}))}>
            <Icon
              icon="dashicons:whatsapp"
              className="h-4 w-4 text-green-800"
            />
          </div>
        </div>
      </div>
      <div className="">
		{modalState.isPhone && <Phone property={property} setModalState={setModalState}/>}
		{modalState.isSMS && <SMS property={property} setModalState={setModalState}/>}
		{modalState.isWhatsapp && <Whatsapp property={property} setModalState={setModalState}/>}
	  </div>
    </div>
  );
};

export default HomeProperty;
