

import { typeProperties } from '@/@types/@types'
import { Features, Hero, Properties } from '@/components/Home_Components'
import axios from 'axios'
import Head from 'next/head'

interface Props {
  properties: typeProperties[];
}

export default function Home({properties}:Props) {

  


  return (
    <>
     <Head>
        <title>Land Listing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main
      
    >
      
      <Hero/>
    <Properties properties={properties}/>
      <Features/>
    
    </main>
    </>
  )
}



export const getServerSideProps = async () => {
  const { data } = await axios.get(`${process.env.BACKEND_URL}/api/v1/properties/featured`)

  return {
    props: {
      properties: data.properties
    }
  }
}



