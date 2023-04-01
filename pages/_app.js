import Footer from '@/compoents/Footer'
import Navbar from '@/compoents/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <>

    <Head>
    <title>My Next App</title>
    <meta name='description' content='this is a test next app' />
    </Head>

    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
 
    </>
  )
}
