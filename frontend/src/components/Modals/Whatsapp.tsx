import { typeProperties } from '@/@types/@types';
import { Icon } from '@iconify/react/dist/iconify.js';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
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

const Whatsapp = ({ property, setModalState }: Props) => {



  const router = useRouter();
  const [ success, setSuccess] = useState(false)
  const [ loader, setLoader] = useState(false)
  const [ form , setForm] = useState({
      name:"",
      phone:"",
      message:`Hey! am interested in ${property.title} that is located at ${property.location.name}`,
  })




  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setForm(prevForm=>({
        ...prevForm,
        [e.target.name]: e.target.value
    }))
}


const handleSubmit = async(e:React.FormEvent)=>{
  e.preventDefault();
 
 if(!form.name || !form.phone ||!form.message){
   toast.warning("Fill all the inputs")
 }
 console.log(form)

   try {
      const {data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/communication/whatsapp`, {name:form.name , phone:form.phone ,property:property._id, message:form.message})

      console.log(data)
      if(!data.success){
          
      }
      setForm({
        name:"",
        phone:"",
        message:"",
    })
    router.push(data.link)
  } catch (error) {
      console.log(error)
  }


}


  return (
    <div className="modal-overlay ">
      <div className="modal-container bg-white rounded-lg ">
   {!success &&     <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5 pb-5 px-2">
          <Icon
            icon="ic:baseline-close"
            className="self-end h-8 w-8"
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
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  "
              placeholder="e.g John"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            message
          </label>
          <input
            type="text"
            id="message"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  "
            placeholder="Am interested in..."
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
              placeholder="0712-345-678"
              pattern="[0-9]{4}[0-9]{3}[0-9]{3}"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button
          
            className="px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-center "
          >
            <Icon
              icon="dashicons:whatsapp"
              className="w-4 h-4 text-white mr-2"
            />
            Whatsapp Us
          </button>
        </form>}
      </div>
    </div>
  )
}

export default Whatsapp