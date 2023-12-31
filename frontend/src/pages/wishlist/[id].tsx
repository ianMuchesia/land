import { typeProperties } from "@/@types/@types";
import { Phone, SMS, Whatsapp } from "@/components/Modals";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import { GetStaticPropsContext } from "next";
import Link from "next/link";
import { useState } from "react";

interface responseData {
  nbHits: number;
  properties: typeProperties[];
  totalProperties: number;
}

interface Props {
  property: typeProperties;
  properties: typeProperties[];
}
const PropertyDetails = ({ property, properties }: Props) => {
  const images = [property?.mainImage, ...property?.images];




  const [show2, setShow2] = useState(true);
  const [index, setIndex] = useState(0);

  const [modalState, setModalState] = useState({
    isPhone: false,
    isSMS: false,
    isWhatsapp: false,
  });

  return (
    <div className="mt-20">
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 ">
      <div className="lg:max-w-[50%]">
        <img
          className="w-full"
          alt="img of a girl posing"
          src={images[index]?.url}
        />
        <div className="grid grid-cols-2 place-items-center gap-2 mt-2">
          {images.length > 0 &&
            images.map((image, i) => {
              if (i == index) {
                return;
              }
              return (
                <img
                  alt="property image"
                  className="h-full"
                  src={image.url}
                  key={image._id}
                  onClick={() => setIndex(i)}
                />
              );
            })}
        </div>
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">
            Land Description
          </p>
          <h1
            className="
            lg:text-2xl
            text-xl
            font-semibold
            lg:leading-6
            leading-7
            text-gray-800
            mt-2
          "
          >
            {property.title}
          </h1>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Price</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600">
              Ksh. {property.price.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">
            Area in metres<sup>2</sup>
          </p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 mr-3">
              {property.area}
            </p>
          </div>
        </div>
        <Link
          href="/properties"
          className="
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800
          text-base
          flex
          items-center
          justify-center
          leading-none
          text-white
          bg-green-800
          w-full
          py-4
          hover:bg-green-700
        "
        >
          <svg
            className="mr-3"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.66699 4.83333V4.84166"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.333 11.5V11.5083"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Check other lands
        </Link>
        <div>
          <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
            {property.description}
          </p>
          <p className="text-base leading-4 mt-7 text-gray-600">
            Product Code: {property.location.name}
            {property._id}
          </p>
          {/* <p className="text-base leading-4 mt-4 text-gray-600">
            Length: 13.2 inches
          </p>
          <p className="text-base leading-4 mt-4 text-gray-600">
            Height: 10 inches
          </p>
          <p className="text-base leading-4 mt-4 text-gray-600">
            Depth: 5.1 inches
          </p> */}
          <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">
           Loation: {
              property?.location.name
           }
          </p>
        </div>
        <div>
          <div className="border-t border-b  mt-7 border-gray-200">
           </div>
        </div>
        <div className="transition duration-500 ease-in-out" >
          <div className="border-b py-4 border-gray-200 " >
            <div
              onClick={() => setShow2(!show2)}
              className="flex justify-between items-center cursor-pointer "
            >
              <p className="text-base leading-4 text-gray-800">Contact us</p>
              <button
                className="
                cursor-pointer
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
                rounded
              "
                aria-label="show or hide"
              >
                <svg
                  className={
                    "transform " + (show2 ? "rotate-180" : "rotate-0")
                  }
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                (show2 ? "block" : "hidden")
              }
              id="sect"
            >
                     <div className="mt-6 flex flex-col items-start gap-8 text-xs ">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 cursor-pointer"
          onClick={()=>setModalState((prev)=>({...prev,isPhone:true}))}>
            <Icon
              icon="solar:phone-outline"
              className="h-10 w-10 text-green-800"
            />
            <p>Via Phone</p>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 "
          onClick={()=>setModalState((prev)=>({...prev,isSMS:true}))}
          >
            <Icon
              icon="ic:outline-sms"
              className="h-10 w-10 text-green-800 cursor-pointer"
            />
            <p>Via SMS</p>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2 cursor-pointer"
          onClick={()=>setModalState((prev)=>({...prev,isWhatsapp:true}))}
          >
            <Icon
              icon="dashicons:whatsapp"
              className="h-10 w-10 text-green-800 "
            />
            <p>Via Whatsapp</p>
          </div>
        </div>
             
            </div>
          </div>
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

export const getStaticPaths = async () => {
  const { data } = await axios.get<responseData>(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/properties`
  );

  const { properties } = data;

  const paths = properties.map((property) => ({
    params: {
      id: property._id,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;

  const { id } = params as { id: string };

  const { data: property } = await axios.get<typeProperties>(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/properties/${id}`
  );

  const { data: response } = await axios.get<responseData>(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/properties/`
  );

  const { properties } = response;

  return {
    props: { property, properties },
  };
};

export default PropertyDetails;
