import React, { useContext} from 'react'
import GameContext from '../context/game/gameContext'
import Button from 'react-bootstrap/Button'
var he = require('he');

const Answers = () => {
    const gameContext = useContext(GameContext)
    const {correctAnswer, turn, getTurn, players, numberOfPlayers, questions, getQuestions } = gameContext
    const { question, layout, player, color } = turn

    const onCorrectClick = (e) => {
        e.preventDefault();
        alert('correct!')

        let updatePlayers = players

        // update correct score for the turn player only if the turn color score is false
        if (updatePlayers[player-1].score[color.idx][0] === false){
            updatePlayers[player-1].correct++
            updatePlayers[player-1].score[color.idx][0] = true
        }

        if (updatePlayers[player-1].correct === 6){
            alert('GAME OVER!')
        }
        
        correctAnswer(updatePlayers);
        
        let i = Math.floor(Math.random() * 6)
        console.log("answers", player, i)
        getTurn(player, i)
        
        // if(questions.length === 1){
        //     getQuestions()
        // }
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

        console.log("answers", newPlayer, idx)
        getTurn(newPlayer, idx)
        
        // if(questions.length === 1){
        //     getQuestions()
        // }
        
        alert('wrong!');
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
                <div>
                    <div>
                        <Button className='answer' onClick= {e => onCorrectClick(e)} variant="outline-dark"> {he.decode(question.correct_answer)} </Button>
                    </div>

                    <div>
                        <Button className='answer' onClick= {e => onWrongClick(e)} variant="outline-dark"> {he.decode(question.incorrect_answers[0])} </Button>
                    </div>
                    
                    <div>
                        <Button className='answer' onClick= {e => onWrongClick(e)} variant="outline-dark"> {he.decode(question.incorrect_answers[1])} </Button>
                    </div>
                   
                   <div>
                        <Button className='answer' onClick= {e => onWrongClick(e)} variant="outline-dark"> {he.decode(question.incorrect_answers[2])} </Button>   
                   </div>

                </div>
            )    
        }
    
        if( layout === 2 )  {
            return (
                <div>
                   <div>
                        <Button className='answer' onClick= {e => onWrongClick(e)} variant="outline-dark"> {he.decode(question.incorrect_answers[2])} </Button>   
                   </div>
                   <div>
                        <Button className='answer' onClick= {e => onCorrectClick(e)} variant="outline-dark"> {he.decode(question.correct_answer)} </Button>
                    </div>

                    <div>
                        <Button className='answer' onClick= {e => onWrongClick(e)} variant="outline-dark"> {he.decode(question.incorrect_answers[0])} </Button>
                    </div>
                    
                    <div>
                        <Button className='answer' onClick= {e => onWrongClick(e)} variant="outline-dark"> {he.decode(question.incorrect_answers[1])} </Button>
                    </div>
                </div>
            )    
        }
    
        if( layout === 3 )  {
            return (
                <div>
                    <div>
                        <Button className='answer' onClick= {e => onWrongClick(e)} variant="outline-dark"> {he.decode(question.incorrect_answers[1])} </Button>
                    </div>
                   
                   <div>
                        <Button className='answer' onClick= {e => onWrongClick(e)} variant="outline-dark"> {he.decode(question.incorrect_answers[2])} </Button>   
                   </div>
                    <div>
                        <Button className='answer' onClick= {e => onCorrectClick(e)} variant="outline-dark"> {he.decode(question.correct_answer)} </Button>
                    </div>

                    <div>
                        <Button className='answer' onClick= {e => onWrongClick(e)} variant="outline-dark"> {he.decode(question.incorrect_answers[0])} </Button>
                    </div>

                </div>
            )    
        }
    
        if( layout === 0 )  {
            return (
                <div>

                    <div>
                        <Button className='answer' onClick= {e => onWrongClick(e)} variant="outline-dark"> {he.decode(question.incorrect_answers[0])} </Button>
                    </div>

                    <div>
                        <Button className='answer' onClick= {e => onWrongClick(e)} variant="outline-dark"> {he.decode(question.incorrect_answers[2])} </Button>   
                    </div>  

                    <div>
                        <Button className='answer' onClick= {e => onWrongClick(e)} variant="outline-dark"> {he.decode(question.incorrect_answers[1])} </Button>
                    </div>

                   <div>
                        <Button className='answer' onClick= {e => onCorrectClick(e)} variant="outline-dark"> {he.decode(question.correct_answer)} </Button>
                    </div>
                    
                </div>
            )    
        }

    }

    return (
        <div>
           
        </div>
    )
}

export default Answers
