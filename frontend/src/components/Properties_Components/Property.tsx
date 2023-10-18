import { typeProperties } from "@/@types/@types";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Phone, SMS, Whatsapp } from "../Modals";
import { useAppDispatch, useAppSelector } from "@/redux/Hooks";
import { addItem } from "@/redux/Features/wishlistSlice";
import { removeWishlistData, sendWishlistData } from "@/redux/services/wishCreator";
import Link from "next/link";
interface Props {
  property: typeProperties;
}

const Property = ({ property }: Props) => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.isAuthenticated);

  const [modalState, setModalState] = useState({
    isPhone: false,
    isSMS: false,
    isWhatsapp: false,
  });

  const handleAddToWishList = async () => {
    if (!user) {
      return;
    }
    await dispatch(sendWishlistData(property));
  };

  return (
    <div className="flex flex-col justify-center my-10">
      <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
          <img
            src={property.mainImage.url}
            alt={property.title}
            className="rounded-xl"
          />
          <div className="mt-4 w-full  bg-white grid place-items-center gap-2 grid-cols-2">
            {property.images.slice(0, 2).map((image) => (
              <img
                src={image.url}
                alt={property.title}
                className="rounded"
                key={image._id}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <div className="flex justify-between item-center">
            <p className="text-gray-500 font-medium  md:block">
              {property.location.name}
            </p>
            <div className="flex items-center">
              <p className="text-gray-600 font-bold text-sm ml-1">
                Area: {property.area}{" "}
                <span className="text-gray-500 font-normal">
                  (metres)<sup>2</sup>
                </span>
              </p>
            </div>
            <div className="cursor-pointer" onClick={handleAddToWishList}>
              <svg
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
              </svg>
            </div>
            <Link href={`/wishlist/${property._id}`} className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
              View Details
            </Link>
          </div>
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">
            {property.title}
          </h3>
          <p className="md:text-lg text-gray-500 text-base">
            {property.description}
          </p>
          <p className="text-xl font-black text-gray-800">
            Ksh.{" "}
            <span className="font-normal text-gray-600 text-base">
              {property.price.toLocaleString()}
            </span>
          </p>
          <div className="mt-6 flex items-center gap-8 text-xs">
            <div
              className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 cursor-pointer"
              onClick={() =>
                setModalState((prev) => ({ ...prev, isPhone: true }))
              }
            >
              <Icon
                icon="solar:phone-outline"
                className="h-10 w-10 text-green-800"
              />
            </div>

            <div
              className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 cursor-pointer"
              onClick={() =>
                setModalState((prev) => ({ ...prev, isSMS: true }))
              }
            >
              <Icon
                icon="ic:outline-sms"
                className="h-10 w-10 text-green-800"
              />
            </div>

            <div
              className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 cursor-pointer"
              onClick={() =>
                setModalState((prev) => ({ ...prev, isWhatsapp: true }))
              }
            >
              <Icon
                icon="dashicons:whatsapp"
                className="h-10 w-10 text-green-800 "
              />
            </div>
          </div>
          <Link href={`/wishlist/${property._id}`} className="bg-gray-200 px-3 py-2 rounded-full text-xs text-center font-medium text-gray-800  md:hidden">
              View details
            </Link>
        </div>
      </div>
      <div className="">
        {modalState.isPhone && (
          <Phone property={property} setModalState={setModalState} />
        )}
        {modalState.isSMS && (
          <SMS property={property} setModalState={setModalState} />
        )}
        {modalState.isWhatsapp && (
          <Whatsapp property={property} setModalState={setModalState} />
        )}
      </div>
    </div>
  );
};

export default Property;
