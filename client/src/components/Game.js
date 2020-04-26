import React, {useContext, useEffect, useState} from 'react'
import Turn from './Turn'
import Players from './Players'
import Question from './Question'
import GameContext from '../context/game/gameContext'
import Answers from './Answers'
import Setup from './SetUp'
import Card from 'react-bootstrap/Card'
import {Col, Row, Container} from 'react-bootstrap'
import Nav from './Nav'
import GameState from '../context/game/GameState'


const Game = () => {
    const gameContext = useContext(GameContext)
    const { turn, getStorage, initGame, init, getTurn, numberOfPlayers, questions, getQuestions } = gameContext
    const [playersCount, setPlayersCount] = useState(5)

   

    useEffect(() => {
        // eslint-disable-next-line
        getStorage()
    }, []);

  
    if(!init){
        return(
            <Setup/>
        )
    }

    if(!questions || !questions.length){
        console.log('getQ from game')
        getQuestions()

        return (
            <h1>Loading...</h1>
        )
    }

    if(!turn){
        getTurn(1, questions[0])
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div >
            <Nav/>
            <div className='container'>
                <Turn/>   
            </div>
        </div>
    )
}

export default Game