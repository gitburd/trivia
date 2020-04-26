import React, {useContext, useEffect, useState} from 'react'
// import GameState from '../context/game/GameState'
import Player from './Player'
import GameContext from '../context/game/gameContext'


const Players = () => {
    const gameContext = useContext(GameContext)
    const { players, numbers, turn } = gameContext
    const [playersGroupOne, setPlayersGroupOne] = useState( players )

    useEffect(()=>{
        for(let i=0;i<2;i++){
            console.log(players[i])
        }
        setPlayersGroupOne (players.filter((player)=> {return player.id >= 2}))
        console.log("playersGroupOne", playersGroupOne)
    },[])

    

    return (
        <div>
            {playersGroupOne.length && (

                players.map(player => (
                    <div>
                        <Player key={player.id} player={player}/>
                    </div>   
                ))
            )}
            
        </div>
    )
}

export default Players


