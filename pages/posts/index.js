import React from 'react'
import AllPostDetails from '@/components/post-item';
const Posts = ({posts}) => { 

  return (
    <div  className="container mx-auto">
     <h1>Posts</h1>
        {
          posts.map((post)=>(
            <AllPostDetails post={post} key={post.id}/>
          ))
        }

    </div>
  )
}

export default Posts;



export async function getStaticProps(){
    const res= await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json()
    return {
        props:{
            posts:data
        }
    }
}