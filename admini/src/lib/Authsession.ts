
import { useEffect } from "react";
import useSWR from "swr";
import { baseURL } from "../baseURL";
import { useNavigate } from "react-router-dom";

const fetcher = async (...args: Parameters<typeof fetch>): Promise<any> => {
  const response = await fetch(...args);
  return response.json();
};

export function AuthSession() {
  const navigate = useNavigate()// Get the router instance
  const { data, error } = useSWR(
    `${baseURL}/auth/showUser`,
    fetcher
  );

  useEffect(() => {
    if (!data?.user) navigate("/login"); // Use router.push here
  }, [data?.user, navigate]); // Note the change here

  return data?.user; // Note the change here
}
