import LoginForm from '@/components/Auth_Components/LoginForm'
import Head from 'next/head'
import React from 'react'

const login = () => {
  return (
 <>
  <Head>
    <title>Land Listing</title>
    <meta name="signup" content="Create Your Account Now" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>

    <LoginForm/>
 </>
  )
}

export default login