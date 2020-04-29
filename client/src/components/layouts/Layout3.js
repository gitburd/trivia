import React, { useContext, useState, useEffect} from 'react'
import GameContext from '../../context/game/gameContext'
import Button from 'react-bootstrap/Button'
var he = require('he')

const Layout3 = ({onCorrectClick, onWrongClick}) => {
    const gameContext = useContext(GameContext)
    const {correctAnswer, turn, getTurn, players, numberOfPlayers } = gameContext
    const { question, layout, player, color } = turn

    return (
        <div>
        {/* <CorrectModal /> */}
        <div>
            <Button 
                className='answer' 
                onClick= {e => onWrongClick(e)} 
                variant="outline-dark"
            > 
                {he.decode(question.incorrect_answers[0])} 
            </Button>
        </div>
        <div>
            <Button 
                className='answer' 
                onClick= {e => onWrongClick(e)} 
                variant="outline-dark"
            > 
                {he.decode(question.incorrect_answers[2])} 
            </Button>   
        </div>  
        <div>
            <Button 
                className='answer' 
                onClick= {e => onCorrectClick(e)} 
                variant="outline-dark"
            > 
                {he.decode(question.correct_answer)} 
            </Button>
        </div>
        <div>
            <Button 
                className='answer' 
                onClick= {e => onWrongClick(e)} 
                variant="outline-dark"
            > 
                {he.decode(question.incorrect_answers[1])} 
            </Button>
        </div>

     
        
    </div>
    )
}

export default Layout3
