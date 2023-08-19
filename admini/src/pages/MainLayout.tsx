import React, { ReactNode } from 'react'
import { Header,  Sidebar } from '../components';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { AuthSession } from '../lib/Authsession';
import { ToastContainer } from 'react-toastify';


interface MainLayoutProps {
    children: ReactNode;
  }
  const MainLayout: React.FC <MainLayoutProps> = () => {

    const user = AuthSession()

   
  
    if(!user)return null
    
    
  return (
    <div className="flex h-screen overflow-hidden">
    <Sidebar />
    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <Header />
    <ToastContainer/>
      <main>
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <Outlet/>
        </div>
      </main>
    </div>
  </div>
  )
  }

  export default MainLayout
  
  
