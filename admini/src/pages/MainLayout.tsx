import React, { ReactNode, useEffect } from "react";
import { Header, Sidebar } from "../components";
import { Outlet, useNavigate } from "react-router-dom";


import { useAppDispatch } from "../redux/hooks";

import { checkAuthentication } from "../redux/authCheck";

interface MainLayoutProps {
  children: ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
 
  

  useEffect(() => {
  // Use router.push here
  
  dispatch(checkAuthentication(navigate))
    
 
   } , [dispatch,navigate]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />

        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
