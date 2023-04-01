import React from 'react'
import img1 from '../../public/1.jpeg'
import img3 from '../../public/3.jpeg'
import Image from 'next/image'
import { func } from 'prop-types'

const Sports = () => {

    const mongo=process.env.NEXT_PUBLIC_MONGO_URI
    const password=process.env.NEXT_PUBLIC_PASSWORD
    console.log(mongo,password)

  return (
    <div className='min-h-screen'>
        <h2>Sports</h2>
        <img src='../1.jpeg' alt="img1"/>
        {/* <img src='https://images.pexels.com/photos/4514301/pexels-photo-4514301.jpeg' alt="img2"/> */}
        
        <Image src={img3}
        height="400"
        width="400"
        placeholder='blur'
        />
    </div>
  )
}

export default Sports

export async function getserverSideProps(){

    const mongo=process.env.MONGO_URI
    const password=process.env.PASSWORD
    console.log(mongo,pass)
return {
    props:{
        mongo,
        pass
    }
}
}