import React from "react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("something went wrong");
 return  res.json();


};

const EidGift = () => {
  const { data, error, isValidating } = useSWR(
    "http://localhost:4000/eid-gifts",
    fetcher
  );
  console.log(data);

  const isLoading = !data && !error && isValidating;

  if(isLoading) return <h2>Gift ......</h2>
  if(error) return <h2>{error.message}</h2>

  return <div>
    <h2>Eid Mubrarak</h2>

    {data.map((gitft)=>(
      <div key={gitft.id}>
        <h2>{gitft.title}</h2>
        <p>{gitft.price}</p>
        <hr />
      </div>
    ))}
  </div>;
};

export default EidGift;
