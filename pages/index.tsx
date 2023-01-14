import Head from 'next/head'
import Image from 'next/image'
//import { Inter } from '@next/font/google'
import Header from '../components/Header'
// import styles from '../styles/Home.module.css'
// import Slide from "../components/Carousel";
// import Service from "../components/Service";
// import Category from '../components/Category';
// import Feature from '../components/Feature'; 
//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Butiq</title>
        <meta name="description" content="Butiq App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='min-h-screen'>
        <Header/>
        {/* <Slide />
        <Service />
        <Category />
        <Feature /> */}
      </main>
    </>
  )
}
