import React, {useContext, useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button'
import GameContext from '../context/game/gameContext'

const SetUp = () => {
    const gameContext = useContext(GameContext)
    const { turn, getStorage, initGame, init, numberOfPlayers, questions, getQuestions } = gameContext
    const [playersCount, setPlayersCount] = useState(4)

    // useEffect(() => {
    //     // eslint-disable-next-line
    //     getQuestions()
    // }, []);


    const onInitClick = (e) => { 
        // e.preventDefault;
        initGame(playersCount)
    }

    const onLeftClick = (e) => {
        // e.preventDefault;
        if(playersCount > 1){
            setPlayersCount(playersCount-1)
        }
    }

    const onRightClick = (e) => {
        // e.preventDefault;
        if(playersCount <10){
            setPlayersCount(playersCount+1)
        }
    }

    return (
        <div className="center-all">
            <div style={{fontSize:'36px', textAlign:'center'}}>
                <h1>how many players/teams?</h1>
                <span className="p-20" style={{textAlign:'center'}}>  
                    <i 
                        onClick= {e => onLeftClick(e)}
                        className='fas fa-angle-left p-20 arrow'
                    > </i>
                    {playersCount}
                    <i 
                        className='fas fa-angle-right p-20 arrow'
                        onClick= {e => onRightClick(e)}
                    > </i> 
                </span>
            </div>

            <Button 
                // className='answer' 
                onClick= {e => onInitClick(e)}
                variant="outline-dark"
            > 
                Let's Go!
            </Button>
        </div>
    )
}

export default SetUp
