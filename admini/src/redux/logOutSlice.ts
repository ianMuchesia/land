import axios from "axios";
import { AppDispatch } from ".";
import { baseURL } from "../baseURL";
import { toast } from "react-toastify";
import { setisNotAuthenticated } from "./authSlice";

export const LogoutUser = () => {
    return (dispatch: AppDispatch) => {
     
      const sendRequestData = async () => {
        try {
            await axios.get(`${baseURL}/auth/logout`, {
                 withCredentials: true,
               });
         
         
               setTimeout(() => {
                 toast.success("Logout successful!");
                 dispatch(setisNotAuthenticated());
        
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