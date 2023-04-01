import React from 'react'

export default function FrameWorksDetails({framework}) {
  return (
    <div>
        {framework.title}
    </div>
  )
}


export async function getServerSideProps(context){
    const {params}=context;

    const res=await fetch(`http://localhost:4000/frameworks/${params.frameId}`);
    const data=await res.json();
console.log("render")
    return{
        props:{
            framework:data,
        }
    }

}