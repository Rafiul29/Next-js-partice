import React from 'react'

function Movies({movies}) {
  return (
    <div>
        <h1>Movies Lists</h1>
        {
            movies.map((movie)=>(
                <h2 key={movie.id}>
                    {movie.id}- { movie.title}- {movie.ticket}
                </h2>
            ))
        }
    </div>
  )
}

export default Movies;

export async function getStaticProps(){


    const res=await fetch("http://localhost:4000/movies");
    const data = await res.json();

    return {
        props:{
            movies:data
        },
        revalidate:12,
    }
}