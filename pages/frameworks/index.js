import React from 'react'

function FrameWorks({frameworks}) {

  return (
    <div>
        <h2>All FrameWorks</h2>
        {
            frameworks.map((framework)=>(
                <h2 key={framework.id}>{framework.id}---- {framework.title}</h2>
            ))
        }
    </div>      
  )
}

export default FrameWorks;

export async function getServerSideProps(){
    const res=await fetch("http://localhost:4000/frameworks/");
    const data=await res.json();

    return{
        props:{
            frameworks:data,
        }
    }
}