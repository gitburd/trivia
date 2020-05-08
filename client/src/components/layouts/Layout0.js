import React, { useContext, useState, useEffect} from 'react'
import GameContext from '../../context/game/gameContext'
var he = require('he')

const Layout0 = ({onCorrectClick, onWrongClick, disabled}) => {
    const gameContext = useContext(GameContext)
    const { turn } = gameContext
    const { question, layout, player, color } = turn

    return (
        <div>
            <div>

                <button 
                    className="btn waves-effect waves-light answer" 
                    disabled={disabled}
                    onClick= {e => onWrongClick(e)} 
                >
                {he.decode(question.incorrect_answers[0])} 
                </button>
            </div>
    
            <div>
                <button 
                    className="btn waves-effect waves-light answer" 
                    disabled={disabled}
                    onClick= {e => onWrongClick(e)} 
                >
                {he.decode(question.incorrect_answers[1])} 
                </button>
            </div>  
    
            <div>
                <button 
                    className="btn waves-effect waves-light answer" 
                    disabled={disabled}
                    onClick= {e => onWrongClick(e)} 
                >
                {he.decode(question.incorrect_answers[2])} 
                </button>
            </div>
            <div>
            <button 
                className="btn waves-effect waves-light answer" 
                disabled={disabled}
                onClick= {e => onCorrectClick(e)}
            >
                {he.decode(question.correct_answer)} 
            </button>
            </div>
        </div>
    )
}

export default Layout0
