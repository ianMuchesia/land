import { useState } from "react";
import { AddImage, AddProperty, BreadCrumb, FormLoader, LocationModal } from "../../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCloseLoader, setFormLoader } from "../../redux/loadSlice";
import { baseURL } from "../../baseURL";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Settings = () => {

  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const loader = useAppSelector((state)=>state.load.formLoader)


  const [ openModal , setOpenModal] = useState(false)

  const [createForm, setCreateForm] = useState({
    title: "",
    area: 0,
    price: 0,
    description: "",
    location: "",
    mainImage: {url:"", _id:"", public_id:""},
    images: [{url:"", _id:"", public_id:""}],
  });



  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
  const { title, area , price , description, location, mainImage, images} = createForm

  if(!title || !area || !price ||!description||!location||!mainImage||images.length < 2 ){
    toast.warning("please fill all the inputs")
    return
  }
 


dispatch(setFormLoader())
  try {
  const data =  await axios.post(`${baseURL}/properties`,  {
      title,
      area, price, description, location, mainImage, images,
    },  { withCredentials: true})
    dispatch(setCloseLoader());

    console.log(data)
    toast.success("Created successfully!");

    setTimeout(() => {
     navigate("/properties")
     setCreateForm({
      title: "",
      area: 0,
      price: 0,
      description: "",
      location: "",
      mainImage: {url:"", _id:"", public_id:""},
      images: [{url:"", _id:"", public_id:""}],
     })
     
   
    }, 2000);
  } catch (error:any) {
    dispatch(setCloseLoader());
    console.log(error);
  
    if (error.response?.data?.msg) {
      toast.error(error.response.data.msg);
      return;
    }
    toast.error("Something wrong happened try again later");
  }
  
    
  };

  return (
    <div>
      <BreadCrumb page={"Settings"} />
      <ToastContainer />
      <button className='bg-primary mb-4 text-white px-4 py-2 rounded-lg' onClick={()=>setOpenModal(true)}>Add Location</button>
      <div className="flex flex-col gap-9">
        {/* <!-- Contact Form --> */}
        <form className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark" onSubmit={handleSubmit}>
          <AddProperty  setCreateForm={setCreateForm} createForm={createForm} />
         
            <AddImage
              mainImage={createForm.mainImage}
              images={createForm.images}
              setCreateForm={setCreateForm}
            />
 <div className="p-6 5">
            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
              Add Land
            </button>
          </div>
          {loader && <FormLoader />}
        </form>
      </div>
      {openModal && <LocationModal setOpenModal={setOpenModal}/>}
    </div>
  );
};

export default Settings;
