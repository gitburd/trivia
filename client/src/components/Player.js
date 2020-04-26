import React from 'react'
import Card from 'react-bootstrap/Card'
import Question from './Question'
import Answers from './Answers'

const Player = ( { player, turn } ) => {
    return (
        // <div className='bounceInUp '>
        // <div className='fadeIn'>
        <div className="bounce">
            { player &&(
                <Card body >
                <div className={`p-10`} key={player.id}>
                    <h4>Player {player.id}</h4>      
                    {player.score.map((s, idx)  => (
                        <span key={`${player.id}-${idx}`}>{s[0]?  <i className={`fas fa-square sqr color-${s[1]} `}></i> :  <i className={`far fa-square sqr color-${s[1]} `}></i> }</span>
                    ))}
                </div>
    
                {
                    player.id === turn.player && (
                        <div>
                            <Question/>
                            <Answers/>
                        </div>
                    )
                }
            
                </Card>
            )}

           </div>
        
    )
}

export default Player
