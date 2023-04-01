
import { useRouter } from 'next/router';
import React from 'react'

const PostDetails = ({post}) => {
    // const router=useRouter()
    // if(router.isFallback){
    //     return <p> Loading....</p>
    // }
 
  return (
    <div className="container mx-auto">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>
  )
}

export default PostDetails;

export async function getStaticPaths(){

    // const res=await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    // const data=await res.json();

    // const paths=data.map((post)=>{
    //     return {
    //         params:{
    //             postId:`${post.id}`,
    //         }
    //     }
    // })

    return{
        // paths,
        // fallback:false
      paths:[
        {params:{postId:"1"}},
        // {params:{postId:"2"}},
      ],
      fallback:"blocking"
 }
}

export async function getStaticProps(context){

    const {params}=context;

    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data=await res.json();

    return{
        props:{
            post:data
        }
    }
}