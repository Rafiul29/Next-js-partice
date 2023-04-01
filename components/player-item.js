import React from 'react'

const PalyerItem = ({player,handleDelete}) => {

   

  return (
    <div>
        <p>Name : {player.name} | Rating : {player.rating}</p>
        <button onClick={()=>handleDelete(player.id)}>Delete</button>
    </div>
  )
}

export default PalyerItem