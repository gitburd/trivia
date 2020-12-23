import React, { useContext, Fragment} from 'react'
import GameContext from '../context/game/gameContext'

var he = require('he');

function Question(props) {
    const gameContext = useContext(GameContext)
    const { turn } = gameContext
    const {color, question} = turn

    return (
        <div className='center'>
            {
                question && color && (
                    <Fragment>
                        <h4 className={`color-${color} p-10`}>
                            <b>{question["category"]}</b>
                        </h4>
                        <p className='p-10'> {he.decode(question.question)}</p>
                    </Fragment>
                )
            }
            
        </div>
    )
}


export default Question