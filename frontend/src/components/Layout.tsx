import Head from 'next/head';
import React, { ReactNode } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';



interface LayoutProps {
    children: ReactNode;
  }

  const Layout = ({ children }:LayoutProps) => {
 

    return (
      <div className="">
        <Head>
          <title>Example Store</title>
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
      </div>
    )
  }
  
  export default Layout