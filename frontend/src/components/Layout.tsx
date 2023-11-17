import Head from 'next/head';
import React, { ReactNode } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import ToastContainerWrapper from '@/lib/ToastContainer';



interface LayoutProps {
    children: ReactNode;
  }

  const Layout = ({ children }:LayoutProps) => {
 

    return (
      <div className="">
        <Head>
          <title>Land listing</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main className="main-container layout">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
        <ToastContainerWrapper/>
      </div>
    )
  }
  
  export default Layout