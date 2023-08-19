import useSWR from "swr";
import { baseURL } from "../baseURL";

const fetcher = async (url: string): Promise<any> => {
  const response = await fetch(url, { credentials: "include" });
  return response.json();
};

export function AuthSession() {
  // Get the router instance
  const { data } = useSWR(`${baseURL}/auth/showAdmin`, fetcher);

  return data;
}
