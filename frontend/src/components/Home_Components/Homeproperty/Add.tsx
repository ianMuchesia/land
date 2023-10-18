import React, { useEffect } from 'react'
import { sendWishlistData } from "@/redux/services/wishCreator";
import { typeProperties } from '@/@types/@types';
import { useAppDispatch, useAppSelector } from '@/redux/Hooks';
import { checkAuthentication } from '@/redux/services/authCheck';


interface Props{
    property:typeProperties;
}
const Add = ({property}:Props) => {

    const dispatch= useAppDispatch()

    const user = useAppSelector(state=>state.auth.isAuthenticated)


      let isFirstRender = true

  useEffect(() => {
    if(isFirstRender){
      dispatch(checkAuthentication());
      isFirstRender = false
    }

  
  }, []); 
  const handleAddToWishList=async()=>{
    if(!user){
    return;
    }
    dispatch(sendWishlistData(property))

   
 
  }
  return (
   <>
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
   </>
  )
}

export default Add