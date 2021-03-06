import React, { useContext, useState, useEffect} from 'react'
import GameContext from '../context/game/gameContext'
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
    const {correctAnswer, turn, getTurn, players, gameOver, numberOfPlayers } = gameContext
    const { question, layout, player, color } = turn
    
    const [showCorrect, setShowCorrect] = useState(false);
    const [showWrong, setShowWrong] = useState(false);
    const [showWinner, setShowWinner] = useState(false);
    const [rolling, setRolling] = useState(false)

    useEffect(() => {
        setRolling(true)
        setTimeout(() => {
            setRolling(false);
        }, 750);
       // eslint-disable-next-line
    }, [question]);

    const onCorrectClick = (e) => {
        e.preventDefault();
        
        let updatePlayers = players

        // update correct score for the turn player only if the turn color score is false
        if (updatePlayers[player-1].score[color] === false){
            updatePlayers[player-1].correct++
            updatePlayers[player-1].score[color] = true
        }

        const i = Math.floor(Math.random() * 6)

        if (updatePlayers[player-1].correct === 6){
            setShowWinner(true)

            const timer = setTimeout(() => {
                getTurn(player+1, i)
                setShowWinner(false)
                gameOver()
              }, 2500);
              return () => clearTimeout(timer);
        } else{
            
            setShowCorrect(true)

            const timer = setTimeout(() => {
                getTurn(player, i)
                setShowCorrect(false)
                correctAnswer(updatePlayers);
            }, 2500);
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
    
        const idx =  Math.floor(Math.random() * 6)

        setShowWrong(true)

        const timer = setTimeout(() => {
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
                        <button 
                            className="btn waves-effect waves-light answer" 
                            disabled={rolling}
                            onClick= {e => onTrueClick(e)} 
                        >
                            <a className='white-text'  href="#cModal">
                                True
                            </a>
                    
                        </button>
                    </div>
                    <div>
                    <button 
                        className="btn waves-effect waves-light answer" 
                        disabled={rolling}
                        onClick= {e => onFalseClick(e)} 
                    >
                        <a className='white-text' href="#cModal">
                            False
                        </a>
                    </button>
                    </div>
                </div>
            )
        }
    
        if( layout === 1 )  {
            return (
                <Layout1
                    onCorrectClick={onCorrectClick}
                    onWrongClick={onWrongClick}
                    disabled={rolling}
                />
            )    
        }
    
        if( layout === 2 )  {
            return (
                <Layout2 
                    onCorrectClick={onCorrectClick}
                    onWrongClick={onWrongClick}
                    disabled={rolling}
                />
            )    
        }
    
        if( layout === 3 )  {
            return (
                <Layout3 
                    onCorrectClick={onCorrectClick}
                    onWrongClick={onWrongClick}
                    disabled={rolling}
                />
            )    
        }
    
        if( layout === 0 )  {
            return (
                <Layout0 
                    onCorrectClick={onCorrectClick}
                    onWrongClick={onWrongClick}
                    disabled={rolling}
                />            
            )    
        }
    }
}

export default Answers
