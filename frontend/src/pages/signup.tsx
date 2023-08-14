import SignUpForm from '@/components/Auth_Components/SignUpForm'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const signup = () => {



  return (
    <>
     <Head>
    <title>Land Listing</title>
    <meta name="signup" content="Create Your Account Now" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
<SignUpForm/>
    </>


  )
}

export default signup