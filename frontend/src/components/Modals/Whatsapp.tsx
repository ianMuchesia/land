import { typeProperties } from "@/@types/@types";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Success from "./Success";
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
const Whatsapp = ({ property, setModalState }: Props) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      phone: "",
      message: `Hey! am interested in ${property.title} that is located at ${property.location.name}`,
    },
  });

  const router = useRouter();
  const [success, setSuccess] = useState(false);

  const FormOnSubmit: SubmitHandler<Inputs> = async (form) => {
    console.log(form);
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/communication/whatsapp`,
        {
          name: form.name,
          phone: form.phone,
          property: property._id,
          message: form.message,
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
        setModalState((prev) => ({ ...prev, isWhatsapp: false }));
      }, 1000);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="modal-overlay ">
      <div className="modal-container bg-white rounded-lg border-2 border-white ">
        <ToastContainer />
        {!success && (
          <form
            onSubmit={handleSubmit(FormOnSubmit)}
            className="flex flex-col items-center gap-2 pb-5 "
          >
            <Icon
              icon="ic:baseline-close"
              className="self-end h-8 w-8 cursor-pointer"
              onClick={() =>
                setModalState((prev) => ({ ...prev, isWhatsapp: false }))
              }
            />
            <div className="h-16 w-16 bg-green-800 rounded-full flex items-center justify-center">
              <Icon icon="dashicons:whatsapp" className="h-8 w-8 text-white " />
            </div>
            <h3 className="text-xl text-center  max-w-sm">{property.title}</h3>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>

              <Controller
                name="name"
                rules={{ required: "Your name is required" }}
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="text"
                      id="name"
                      className={`selection:bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  ${
                        errors.name
                          ? "focus:outline-red-500 border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="e.g John"
                      name="name"
                    />
                    <span className="text-red-500">{errors.name?.message}</span>
                  </>
                )}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                message
              </label>

              <Controller
                name="message"
                rules={{ required: "message is required" }}
                control={control}
                render={({ field }) => (
                  <>
                    <textarea
                      {...field}
                      rows={5}
                      id="message"
                      className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  ${
                        errors.message
                          ? "border-red-500 focus:outline-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Am interested in..."
                      name="message"
                    />
                    <span className="text-red-500">
                      {errors.message?.message}
                    </span>
                  </>
                )}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>

              <Controller
                name="phone"
                rules={{ required: "Your Phone number is required" }}
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="tel"
                      id="phone"
                      className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  ${
                        errors.phone
                          ? "border-red-500 focus:outline-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="0712-345-678"
                      pattern="[0-9]{4}[0-9]{3}[0-9]{3}"
                    />
                    <span className="text-red-500">
                      {errors.phone?.message}
                    </span>
                  </>
                )}
              />
            </div>
            <button className="px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-center ">
              <Icon
                icon="dashicons:whatsapp"
                className="w-4 h-4 text-white mr-2"
              />
              Whatsapp Us
            </button>
          </form>
        )}
        {success && <Success />}
      </div>
    </div>
  );
};

export default Whatsapp;
