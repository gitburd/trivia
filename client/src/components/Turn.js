import React, {useContext} from 'react'
import Player from './Player'
import GameContext from '../context/game/gameContext'


const Turn = (props) => {
    const gameContext = useContext(GameContext)
    const { turn, players } = gameContext
    
    return (
      <div>
        {
          players.length && (
            players.filter(p =>{
              return p.id >= turn.player
            }).map(player => (
              <Player key={player.id} player={player} turn={turn}/>
            ))
          )
        }

        {
          players.length && (
            players.filter(p =>{
              return p.id < turn.player
            }).map(player => (
              <Player key={player.id} player={player} turn={turn}/>
            ))
          )
        }
      </div>
    )
}

export default Turn
