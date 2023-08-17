import React, { ReactNode, useEffect } from 'react'
import { Header, LogoutModal, Sidebar } from '../components';
import { Outlet } from 'react-router-dom';

import { AuthSession } from '../lib/Authsession';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { checkAuthentication } from '../redux/authCheck';
interface MainLayoutProps {
    children: ReactNode;
  }
  const MainLayout: React.FC <MainLayoutProps> = () => {

    const user = AuthSession()

    const modal = useAppSelector(state=> state.modal.isOpen)

  
    if(!user)return null
    
    
  return (
    <div className="flex h-screen overflow-hidden">
    <Sidebar />
    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <Header />
      {modal && <LogoutModal/>}
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
  
  
