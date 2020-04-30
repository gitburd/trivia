import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card'
import Question from './Question'
import Answers from './Answers'
import Die from './Die'

const Player = ( { player, turn } ) => {
    const [rolling, setRolling] = useState(false)

    useEffect(() => {
        setRolling(true)
        setTimeout(() => {
            setRolling(false);
        }, 2000);
       // eslint-disable-next-line
    }, []);
    return (
        <div>
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
                            <Die color={turn.color.code} />
                            <Question/>
                            <Answers />
                        </div>
                    )
                }
            
                </Card>
            )}

           </div>
        
    )
}

export default Player
