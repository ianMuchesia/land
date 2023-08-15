import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

const fetcher = async (url: string): Promise<any> => {
  const response = await fetch(url, { credentials: "include" });
  return response.json();
};

export function AuthSession() {
  const router = useRouter();
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/showUser`,
    fetcher
  );



  useEffect(() => {
    if (data?.msg) router.push("/login");
  }, [data?.user]);
  return data?.user;
}
