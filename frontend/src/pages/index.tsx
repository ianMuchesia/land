

import { Features, Hero, Properties } from '@/components/Home_Components'
import Head from 'next/head'
import axios from 'axios'
import { typeProperties } from '@/@types/@types'


interface Props {
  properties: typeProperties[];
}

export default function Home({ properties }: Props) {




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
  try {
    const { data } = await axios.get(`${process.env.BACKEND_URL}/api/v1/properties`);

    const properties = data?.properties.slice(0, 8);

    return {
      props: { properties },
    };
  } catch (error) {
    return {
      props: { error: "Failed to fetch properties" },
    };
  }
};

