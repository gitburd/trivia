import React, {useEffect, useState} from 'react'
import Question from './Question'
import Answers from './Answers'
import Die from './Die'
import pure from 'recompose/pure'

const Player = ( { player, turn} ) => {
    const colors = ['one', 'two', 'three',  'four', 'five', 'six']
    return (
        <div>
            { player &&(
                <div className="row">
                    <div className="col s12 m9">
                        <div className="card-panel">
                        <div className={`center-text p-40`} key={player.id}>
                            <p className={player.id ===turn.player ? `player-title-active back-dark` :`player-title` }>Player {player.id}</p>      
                            {colors && colors.map((c, idx)  => (
                                <span key={`${player.id}-${idx}`}>{player.score[c]?  <i className={`fas fa-square sqr color-${c} `}></i> :  <i className={`far fa-square sqr color-${c} `}></i> }</span>
                            ))}
                        </div>
                        {
                            player.id === turn.player && (
                                <div>
                                    <Die color={turn.color} />
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

export default pure(Player);
