
import { typeProperties } from "@/@types/@types";
import Loader from "@/Loader/Loader";
import { removeFromWishlist } from "@/redux/Features/wishlistSlice";

import { useAppDispatch, useAppSelector } from "@/redux/Hooks";
import { useGetWishlistQuery} from "@/redux/services/Api";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";


const Wishlist = () => {


  const dispatch = useAppDispatch();

  const wishlist = useAppSelector(state=>state.wish.itemsList)

  //const { user, isLoading } = useSelector((state) => state.auth); // Replace with the correct slice path
  // const router = useRouter();

  // // This useEffect is used to store the original URL when the user is unauthenticated
  // useEffect(() => {
  //   if (!user) {
  //     const handleRouteChange = (url: string) => {
  //       // Store the original URL before redirecting to the login page
  //       localStorage.setItem("returnUrl", url);
  //     };

  //     router.events.on("routeChangeStart", handleRouteChange);

  //     return () => {
  //       // Clean up the event listener
  //       router.events.off("routeChangeStart", handleRouteChange);
  //     };
  //   }
  // }, [router, user]);



  const handleRemoveFromWishlist = (property:string)=>{
    dispatch(removeFromWishlist(property))
  }

 


  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 mt-20">
      <h2 className="mb-4 text-2xl font-semibold leadi">Wishlist</h2>
      <div className="overflow-x-auto">
        {/* {isLoading  ? (
          <Loader />
        ) : (
          <></>
        )} */}
        <table className="min-w-full text-xs">
          {/* <colgroup>
				<col>
				<col>
				<col>
				<col>
				<col>
				<col className="w-24">
			</colgroup> */}
          <thead className="dark:bg-gray-700">
            <tr className="text-left">
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Location</th>
              <th className="p-3">Area</th>
              <th className="text-center">Price</th>
              <th className="p-3">View</th>
              <th className="">Action</th>
            </tr>
          </thead>
          <tbody>
          
            {wishlist.map((item) => {

              const { property } = item || {};
              return (
                <tr
                  className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                  key={property._id}
                >
                  <td className="p-3">
                    <img
                      src={property.mainImage?.url}
                      alt=""
                      className="h-16 w-16 object-cover"
                    />
                  </td>
                  <td className="p-3">
                    <p>{property.title}</p>
                  </td>
                  <td className="p-3">
                    <p>{property.location?.name}</p>
                    <p className="dark:text-gray-400">Kenya</p>
                  </td>
                  <td className="p-3">
                    <p>
                      {property.area}m<sup>2</sup>
                    </p>
                  </td>
                  <td className="text-center">
                    <p>Ksh. {property.price?.toLocaleString()}</p>
                  </td>
                  <td className="">
                    <Link href={`/wishlist/${property._id}`} className="px-3 py-1 font-semibold rounded-md  underline cursor-pointer">
                      <span>View Details</span>
                    </Link>
                  </td>
                  <td className="text-center ">
                    <button
                      onClick={()=>handleRemoveFromWishlist(property._id)}
                      type="button"
                      className="cursor-pointer text-red-500    text-xl hover:text-red-600"
                    >
                      <Icon icon="gala:remove" />
                    </button>
                    <br />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
