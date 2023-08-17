import LoginSVG from "../assets/LoginSVG"
import DarkLogo from "../assets/images/logo/logo.svg"
import LightLogo from "../assets/images/logo/logo-dark.svg"
import { Icon } from "@iconify/react/dist/iconify.js"
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../baseURL";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";



type Inputs = {
  email:string;
  password:string;
};
const Login = () => {


  const {
    register,
   
    handleSubmit,
    reset,
    formState: { errors },
    
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
   
    },
  });


  const navigate = useNavigate()

  const [success, setSuccess] = useState(false);



  const FormOnSubmit: SubmitHandler<Inputs> = async (form) => {
   
    try {
      const { data } = await axios.post(
        `${baseURL}/auth/loginAdmin`,
        {
          email:form.email,
          password:form.password,
        
        },{
          withCredentials: true,
      }
      );

      console.log(document.cookie)
      console.log(data);
      if (!data.success) {
        toast.error(data.msg);
      }

      if (!data.success) {
        toast.error(data.msg);
    } 
      
      setSuccess(true);
      reset();
      setTimeout(() => {
        navigate("/")
        setSuccess(false);
       
      }, 1000);
    } catch (error: any) {
      console.log(error);
       
          
      if (error.response?.data?.msg) {
        toast.error(error.response.data.msg);
        return;
      }
      toast.error("Something wrong happened try again later");
    
    }
  };



  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
   <ToastContainer/>
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-bold text-black dark:text-white">
        Sign In
      </h2>

      
    </div>

{/* 
    <!-- ====== Forms Section Start --> */}
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-wrap items-center">
        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="py-17.5 px-26 text-center">
            <Link className="mb-5.5 inline-block text-4xl text-primary" to="/login">
Land Listing
              {/* <img className="hidden dark:block" src={DarkLogo} alt="Logo" />
              <img className="dark:hidden" src={LightLogo} alt="Logo" /> */}
            </Link>

            <p className="font-medium 2xl:px-20">
             Make Sure You never share your password with anyone
            </p>

            <span className="mt-15 inline-block">

             <LoginSVG/>
             
            </span>
          </div>
        </div>
        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <span className="mb-1.5 block font-medium">Administrator</span>
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Sign In to LandAdmin
            </h2>

            <form onSubmit={handleSubmit(FormOnSubmit)}>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">Email</label>
                <div className="relative">
                  <input type="email" placeholder="Enter your email"
                  {...register("email", {required:"Your Email  is required"}) }
                    className={`w-full placeholder:w-full  rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary  ${
                      errors.email
                        ? "border-[#FF0000] border-2 focus:outline-[#FF0000]"
                        : "border border-stroke"
                    }`} />

                  <span className="absolute right-4 top-4">

                  <Icon icon="ic:outline-email" className="fill-current" width="22" height="22"  />
                    
                  </span>
                </div>
                <span className="text-[#FF0000]">
                      {errors.email?.message}
                    </span>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-white">Re-type Password</label>
                <div className="relative">
                  <input type="password" placeholder="Do Not Share Password"
                  {...register("password", {required:"Password is required"}) }
                    className={`w-full rounded-lg  bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                      errors.password
                        ? "border-[#FF0000] border-2 focus:outline-[#FF0000]"
                        : "border border-stroke"
                    }`} />
                   
                  <span className="absolute right-4 top-4">
                  <Icon icon="ph:lock-light"
                  className="fill-current" width="22" height="22"  />
                  
                  </span>
                </div>
                <span className="text-[#FF0000]">
                      {errors.password?.message}
                    </span>

              </div>

              <div className="mb-5">
                <input type="submit" value="Sign In"
                  className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 font-medium text-white transition hover:bg-opacity-90" />
              </div>


            </form>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  )
}

export default Login