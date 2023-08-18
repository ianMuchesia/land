
import { setIsAuthenticated, setisNotAuthenticated } from "../Features/authSlice"
import { AppDispatch } from "../store"

import axios from "axios"




export const checkAuthentication=()=>{
  
    return async(dispatch:AppDispatch)=>{
        try {

            const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // Ensure this value is set correctly in your environment
            const apiEndpoint = '/api/v1/auth/showUser';
            const url = `${backendUrl}${apiEndpoint}`;
            
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
            console.log(error)
            dispatch(setisNotAuthenticated())
        }
    }
}


