import PalyerItem from "@/components/player-item";
import { useEffect, useState } from "react";

const Players = () => {
  const [players, setPlayers] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [error, setError] = useState("");

  const [playerName, setPlayerName] = useState("");
  const [playerRating, setplayerRating] = useState("");

  useEffect(() => {
    const getPlayers = async () => {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch("/api/players");
        if (!res.ok) throw new Error("faild to fetch");
        const data = await res.json();

        setPlayers(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        console.log(err.message);
      }
    };
    getPlayers();
  }, []);

  //creating a new player obj
const handleSubmit=async(e)=>{
    e.preventDefault();
    const playerObj={
        id:Date.now(),
        name:playerName,
        rating:playerRating
    }

    const res= await fetch("/api/players",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(playerObj)
    })
    const data=await res.json();
    if(!res.ok) throw new Error("Failed to send data")

    if(res.ok){

        //update new data to the player state
        setPlayers([...players,data])
    }
}

//delete players

const handleDelete=async(id)=>{
    const res= await fetch(`/api/players/${id}`,{
        method:"DELETE"
    })
    const data=await res.json()
    setPlayers(players.filter(player=>player.id!==id))
    console.log(data.message);
}

  if (isLoading) {
    return (
      <div>
        <p>Loading ........</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }





  return (
    <div>
      <h2>Add a New Players</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          type="text"
          placeholder="Enter a player name"
        />
        <input
          value={playerRating}
          onChange={(e) => setplayerRating(e.target.value)}
          type="text"
          placeholder="Enter a player rating"
        />
        <button type="submit">Submit players</button>
      </form>
      <h2>Players</h2>
      {players.length > 0 &&
        players.map((player) => <PalyerItem player={player} key={player.id}  handleDelete={handleDelete}/>)}
    </div>
  );
};

export default Players;
