import React from "react";
import { Icon } from "@iconify/react";
import { typeProperties } from "@/@types/@types";

interface Props{
    property:typeProperties;
}

const HomeProperty = ({property}:Props) => {
  return (
    <a
      href="#"
      className="block rounded-lg p-4 shadow-sm shadow-indigo-100 bg-[#fafafa]"
    >
      <img
        alt="Home"
        src={property?.mainImage.url}
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">Ksh. {property?.price}</dd>
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
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <Icon
              icon="solar:phone-outline"
              className="h-4 w-4 text-green-800"
            />
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <Icon icon="ic:outline-sms" className="h-4 w-4 text-green-800" />
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <Icon
              icon="dashicons:whatsapp"
              className="h-4 w-4 text-green-800"
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default HomeProperty;
