import { useState } from "react";
import { typeImage } from "../@types/@types";
import axios from "axios";
import { baseURL } from "../baseURL";
import { toast } from "react-toastify";

interface Props {
   imageObject:typeImage;
   title:string;
   property:string|undefined;
  }
  
const Image = ({imageObject, title, property}:Props) => {

    let defaultImage = imageObject?.url

    const [ uploadImage , setUploadImage] = useState(imageObject?.url)

    

    const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0];

        const reader = new FileReader();
        
        reader.onloadend=()=>{
            setUploadImage(reader.result as string)
        }

        reader.readAsDataURL(file as Blob)
    }


    const handleFileUpdate = async()=>{

        const image = {
            name: title,
            url: uploadImage,
            public_id:imageObject.public_id,
            _id:imageObject._id,
        }
        console.log(image)
        try {
            const { data} =await axios.patch(`${baseURL}/properties/image/${property}`,image, {withCredentials:true} )

            if(!data.success){
                toast.error(data.msg)
            }
            defaultImage = data.image.url
          toast.success("successfully uploaded")
        } catch (error:any) {

            console.log(error)
            if (error.response?.data?.msg) {
              toast.error(error.response.data.msg);
              return;
            }
            toast.error("Something wrong happened, try again later")
        }
    }


    
  

  return (
    <div className="flex justify-center mt-8">
        
          <div className="rounded-lg shadow-xl bg-gray-50 ">
            <div className="m-4">
           
              
              <h4 className="text-xl text-center">{title}</h4>
              <label className="inline-block mb-2 text-gray-500">
                Upload Image(jpg,png,svg,jpeg)
              </label>
              <div className="flex flex-col items-center justify-center w-full">
                <label className=" border-1 h-32 w-56 md:h-40 md:w-60 border-dashed hover:bg-gray-100 hover:border-gray-300">
                  <div className="flex flex-col items-center justify-center">
                    
                    <img src={uploadImage} alt="mainImage" className="h-32 w-56 md:h-40 md:w-60" />

                    
                  </div>
                  <input type="file" className="opacity-0" 
                  onChange={handleFileChange}
                  />
                </label>
                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Click on the photo
                    </p>
              </div>
            </div>
            <div className="flex p-2 space-x-4">
             
              <button  onClick={handleFileUpdate}  className="px-4 py-2 text-white bg-primary rounded shadow-xl">
                Update
              </button>
              <button
              onClick={()=>setUploadImage(defaultImage)}
              className="px-4 py-2 border-2 text-black border-[gray] bg-white rounded shadow-xl">
                Cancel
              </button>
            </div>
          </div>
        </div>
  )
}

export default Image