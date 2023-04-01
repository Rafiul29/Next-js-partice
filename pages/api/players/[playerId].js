import { players } from "@/data/players";

export default function handler(req, res) {
  const { playerId } = req.query;

  const player = players.find((player) => player.id === +playerId);

  if (req.method === "GET") {
    if (player) {
      res.status(200).json(player);
    }
    if (!player) {
      res.status(404).json({ error: "player not found" });
    }
  }

  if(req.method==="DELETE"){
    const playerIndex = players.findIndex((player) => player.id === +playerId);

    players.splice(playerIndex, 1);
    res.status(200).json({message:"player deleted"})

  }
}