
import { AppDispatch } from "./"

import axios from "axios"
import { baseURL } from "../baseURL"
import { setIsAuthenticated, setisNotAuthenticated } from "./authSlice"




export const checkAuthentication=()=>{
  
    return async(dispatch:AppDispatch)=>{
        try {

       
            const apiEndpoint = '/auth/showAdmin';
            const url = `${baseURL}${apiEndpoint}`;
            
            const { data } = await axios.get(url, { withCredentials: true });
            
        
        
            if(data?.success){
                const {name , userId , role} = data?.user
                dispatch(setIsAuthenticated({
                    name,
                    userId,
                    role
                }))
                
                
            }

        } catch (error) {
            
           
            dispatch(setisNotAuthenticated())
        }
    }
}


