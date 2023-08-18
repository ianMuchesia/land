import { typeProperties } from "@/@types/@types";
import { removeItem } from "@/redux/Features/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@/redux/Hooks";
import { removeWishlistData } from "@/redux/services/wishCreator";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

const Wishlist = () => {
  const dispatch = useAppDispatch();

  const wishList = useAppSelector((state) => state.wish.itemsList);

  const handleRemoveFromWishList = (item: typeProperties) => {
    dispatch(removeWishlistData(item));
  };

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 mt-20">
      <h2 className="mb-4 text-2xl font-semibold leadi">Wishlist</h2>
      <div className="overflow-x-auto">
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
            {wishList.map((item) => (
              <tr
                className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                key={item._id}
              >
                <td className="p-3">
                  <img
                    src={item.mainImage.url}
                    alt=""
                    className="h-16 w-16 object-cover"
                  />
                </td>
                <td className="p-3">
                  <p>{item.title}</p>
                </td>
                <td className="p-3">
                  <p>{item.location.name}</p>
                  <p className="dark:text-gray-400">Kenya</p>
                </td>
                <td className="p-3">
                  <p>
                    {item.area}m<sup>2</sup>
                  </p>
                </td>
                <td className="text-center">
                  <p>Ksh. {item.price.toLocaleString()}</p>
                </td>
                <td className="">
                  <Link href={`/wishlist/${item._id}`} className="px-3 py-1 font-semibold rounded-md  underline cursor-pointer">
                    <span>View Details</span>
                  </Link>
                </td>
                <td className="text-center ">
                  <button
                    onClick={() => handleRemoveFromWishList(item)}
                    type="button"
                    className="cursor-pointer"
                  >
                    <Icon icon="gala:remove" />
                  </button>
                  <br />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
