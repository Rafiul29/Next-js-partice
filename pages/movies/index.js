
import { useState } from "react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) return "something went wrong";
  return res.json();
};
const Movies = () => {
  const [movie, setMovie] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit=async(e)=>{

    e.preventDefault();
    const movieObj={
        id:Date.now(),
        title:movie,
        rating,
    }

    const res=await fetch("/api/movies",{
        method:"POST",
        headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify(movieObj)
    })
    console.log(res)
    const data= await res.json();

    console.log(data)
  }


  const { data, error, isvlidating } = useSWR("/api/movies", fetcher);

  const isLoading = !data && !error && !isvlidating;
  if (isLoading) return <p>Loading ..........</p>;
  if (error) return <p> {error.message}</p>;


  return (
    <div>
      <h1>All movies collection</h1>
      <div>
        <h2>Submit new Movie</h2>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setMovie(e.target.value)}
            type="text"
            placeholder="Write a movie name"
          />
          <input
            onChange={(e) => setRating(e.target.value)}
            type="text"
            placeholder="Write a rating"
          />
          <button type="submit">Submit movie</button>
        </form>
      </div>

      {data.map((movie) => (
        <div key={movie.id}>
          <p>
            {movie.title}-{movie.rating}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Movies;
