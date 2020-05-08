import React, {useEffect, useState} from 'react'
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
                <div className="row">
                    <div className="col s12 m9">
                        <div className="card-panel">
                        <div className={`center-text p-40`} key={player.id}>
                            <p className={player.id ===turn.player ? `player-title-active back-dark` :`player-title` }>Player {player.id}</p>      
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
                            
                        </div>
                    </div>
                </div>
            )}

           </div>
        
    )
}

export default Player
