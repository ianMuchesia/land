import { typeProperties } from "@/@types/@types";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Success from "./Success";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import { SubmitHandler, useForm } from "react-hook-form";
interface Props {
  setModalState: React.Dispatch<
    React.SetStateAction<{
      isPhone: boolean;
      isSMS: boolean;
      isWhatsapp: boolean;
    }>
  >;
  property: typeProperties;
}

type Inputs = {
  name: string;
  phone: number | string;
  message: string;
};


const Phone = ({ property, setModalState }: Props) => {
  const {
    register,
   
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      phone: "",
   
    },
  });

  const router = useRouter();
  const [success, setSuccess] = useState(false);

  


  const FormOnSubmit: SubmitHandler<Inputs> = async (form) => {
   
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/communication/phone`,
        {
          name: form.name,
          phone: form.phone,
          property: property._id,
        
        }
      );

      console.log(data);
      if (!data.success) {
        toast.error(data.msg);
      }

      reset();
      setSuccess(true);
      router.push(data.link);
      setTimeout(() => {
        setSuccess(false);
        setModalState((prev) => ({ ...prev, isPhone: false }));
      }, 1000);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };


  return (
    <div className="modal-overlay ">
     
      <div className="modal-container bg-white rounded-lg border-2 border-white ">
        <ToastContainer/>
        {!success && <form className="flex flex-col items-center gap-5 pb-5 px-2" onSubmit={handleSubmit(FormOnSubmit)}>
          <Icon
            icon="ic:baseline-close"
            className="self-end h-8 w-8 cursor-pointer"
            onClick={() =>
              setModalState((prev) => ({ ...prev, isPhone: false }))
            }
          />
          <div className="h-16 w-16 bg-green-800 rounded-full flex items-center justify-center">
            <Icon icon="solar:phone-outline" className="h-8 w-8 text-white " />
          </div>
          <h3 className="text-xl text-center  max-w-sm">{property.title}</h3>
        
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {required:"Your name is required"}) }
              className={`selection:bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  ${
                errors.name
                  ? "focus:outline-red-500  border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="e.g John"
             
            />
                <span className="text-red-500">{errors.name?.message}</span>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", {required:"Your Phone Number is required"}) }
              className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  ${
                errors.phone
                  ? "border-red-500 focus:outline-red-500"
                  : "border-gray-300"
              }`}
              placeholder="e.g 0712345678"
              pattern="[0-9]{4}[0-9]{3}[0-9]{3}"
             
            />
              <span className="text-red-500">
                      {errors.phone?.message}
                    </span>
          </div>
          <button
           
            className="px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-center "
          >
            <Icon
              icon="solar:phone-outline"
              className="w-4 h-4 text-white mr-2"
            />
            Contact Us
          </button>
          
        </form>}
        {success && <Success/>}
      </div>
    </div>
  );
};

export default Phone;
