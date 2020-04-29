import React, { useContext, useState, useEffect} from 'react'
import GameContext from '../context/game/gameContext'
import Button from 'react-bootstrap/Button'
import CorrectModal from './CorrectModal'
import WrongModal from './WrongModal'
import WinnerModal from './WinnerModal'
import Layout0 from './layouts/Layout0'
import Layout1 from './layouts/Layout1'
import Layout2 from './layouts/Layout2'
import Layout3 from './layouts/Layout3'

var he = require('he');

const Answers = () => {
    const gameContext = useContext(GameContext)
    const {correctAnswer, turn, getTurn, players, numberOfPlayers } = gameContext
    const { question, layout, player, color } = turn

    const [showCorrect, setShowCorrect] = useState(false);
    const [showWrong, setShowWrong] = useState(false);
    const [showWinner, setShowWinner] = useState(false);

    const onCorrectClick = (e) => {
        e.preventDefault();
        
        let updatePlayers = players

        // update correct score for the turn player only if the turn color score is false
        if (updatePlayers[player-1].score[color.idx][0] === false){
            updatePlayers[player-1].correct++
            updatePlayers[player-1].score[color.idx][0] = true
        }

        let i = Math.floor(Math.random() * 6)

        if (updatePlayers[player-1].correct === 6){
            setShowWinner(true)

            const timer = setTimeout(() => {
                getTurn(player+1, i)
                setShowWinner(false)
              }, 2500);
              return () => clearTimeout(timer);
        } else{
            setShowCorrect(true)
            
            const timer = setTimeout(() => {
                getTurn(player, i)
                setShowCorrect(false)
                correctAnswer(updatePlayers);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }      

    const onWrongClick = (e) => {
        e.preventDefault();

        let newPlayer = player

        if(newPlayer == Number(numberOfPlayers)){
            newPlayer = 1
        } else {
            newPlayer = newPlayer + 1
        }

        let idx = Math.floor(Math.random() * 6)

        setShowWrong(true)

        const timer = setTimeout(() => {
            console.log('This will run after 2.5 seconds!')
            getTurn(newPlayer, idx)
            setShowWrong(false)
            
          }, 2500);
          return () => clearTimeout(timer);
        
    }

    const onTrueClick = (e) => {
        if(question.correct_answer === 'True'){
            onCorrectClick(e)
        } else {
            onWrongClick(e)
        }
    }  
    
    const onFalseClick = (e) => {
        if(question.correct_answer === 'False'){
            onCorrectClick(e)
        } else {
            onWrongClick(e)
        }
    } 
    

    if(question){
        if(showCorrect){
            return(
                <CorrectModal
                    correctAnswer={he.decode(question.correct_answer)} />
            )
        }  

        if(showWrong){
            return(
                <WrongModal
                    correctAnswer={he.decode(question.correct_answer)} />
            )
        }

        if(showWinner){
            return(
                <WinnerModal
                    player={player} />
            )
        }  

        if(question.type === 'boolean'){
            return(
                <div>
                    <div>
                        <Button 
                            className='answer' 
                            onClick= {e => onTrueClick(e)} 
                            variant="outline-dark"
                        > 
                            True 
                        </Button>
                    </div>
                    <div>
                        <Button 
                            className='answer' 
                            onClick= {e => onFalseClick(e)} 
                            variant="outline-dark"
                        > 
                            False 
                        </Button>
                    </div>
                </div>
            )
        }
    
        if( layout === 1 )  {
            return (
                <Layout1
                    onCorrectClick={onCorrectClick}
                    onWrongClick={onWrongClick}
                />
            )    
        }
    
        if( layout === 2 )  {
            return (
                <Layout2 
                    onCorrectClick={onCorrectClick}
                    onWrongClick={onWrongClick}
                />
            )    
        }
    
        if( layout === 3 )  {
            return (
                <Layout3 
                    onCorrectClick={onCorrectClick}
                    onWrongClick={onWrongClick}
                />
            )    
        }
    
        if( layout === 0 )  {
            return (
                <Layout0 
                    onCorrectClick={onCorrectClick}
                    onWrongClick={onWrongClick}
                />            
            )    
        }
    }
}

export default Answers
