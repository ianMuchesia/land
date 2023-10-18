import axios from "axios";
import { AppDispatch } from ".";
import { baseURL } from "../baseURL";
import { toast } from "react-toastify";
import { setisNotAuthenticated } from "./authSlice";
import { NavigateFunction } from "react-router-dom";


export const LogoutUser = (navigate:NavigateFunction) => {
    return (dispatch: AppDispatch) => {
     
      const sendRequestData = async () => {
        try {
      const {data} = await axios.get(`${baseURL}/auth/logout`, {
                 withCredentials: true,
               });
         
             
         
               if(!data.success){
                toast.error("something wrong happened")
                return
               }
               setTimeout(() => {
                 toast.success("Logout successful!");
                 dispatch(setisNotAuthenticated());
                 navigate("/login")

        
               }, 1000);
            
             } catch (error: any) {
               if (error.response?.data?.msg) {
                 toast.error(error.response.data.msg);
                 return;
               }
               toast.error("Something wrong happened try again later");
             }
           };
     
  
      sendRequestData();
    };
  };