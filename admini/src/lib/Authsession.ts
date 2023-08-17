import { useEffect } from "react";
import useSWR from "swr";
import { baseURL } from "../baseURL";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { setIsAuthenticated } from "../redux/authSlice";

const fetcher = async (url: string): Promise<any> => {
  const response = await fetch(url, { credentials: "include" });
  return response.json();
};

export function AuthSession() {

  const dispatch = useAppDispatch()
  const navigate = useNavigate(); // Get the router instance
  const { data, error } = useSWR(`${baseURL}/auth/showAdmin`, fetcher);

  

  useEffect(() => {
    if (data && !data?.success) {
      navigate("/login");
    } // Use router.push here
  }, [data, navigate]); // Note the change here

  if (data && data?.success) {
    

    const {name , userId , role} = data?.user
    dispatch(setIsAuthenticated({
        name,
        userId,
        role
    }))
    
    return true;
    
  } // Note the change here
}
