import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import GameContext from './gameContext';
import gameReducer from './gameReducer';
import {
  GET_TURN,
  GET_QUESTIONS,
  REMOVE_QUESTION,
  QUESTIONS_ERROR,
  CORRECT_ANSWER,
  GAME_OVER,
  INIT_GAME,
  GET_STORAGE
} from '../types'

const GameState = props => {
    const initialState = {
        colors:[ {code:'one', idx:0}, {code:'two', idx:2}, {code:'three', idx:3}, {code:'four', idx:3}, {code:'five', idx:4}, {code:'six', idx:5},],

        // catigories:[{lable:'General Knowledge', id:9}, {lable:'Art', id:25}, {lable:'Books', id:10},{lable:'Film', id:11}, {lable:'Music', id:12},{lable:'Science & Nature', id:17}],
        players:[
          // {id:1, score:[[false,'one'],[false,'two'], [true,'three'], [false, 'four'],[true, 'five'], [false, 'six']], correct:2}, 
          // {id:2, score:[[false,'one'],[false,'two'], [true,'three'], [false, 'four'],[true, 'five'], [false, 'six']], correct:2}, 
          // {id:3, score:[[false,'one'],[false,'two'], [true,'three'], [false, 'four'],[true, 'five'], [false, 'six']], correct:2}, 
          // {id:4, score:[[false,'one'],[false,'two'], [true,'three'], [false, 'four'],[true, 'five'], [false, 'six']], correct:2}
        ],
        numberOfPlayers:4,
        turn:null,
        questions:[],
        init:false
    };

    // {category:"Entertainment: Video Games",type:"multiple",difficulty:"medium",question:"What is the name of the currency in the &quot;Animal Crossing&quot; series?",correct_answer:"Bells", incorrect_answers:["beatles", "goats", "cats"]}
    
        
    const [state, dispatch] = useReducer(gameReducer, initialState);

    const getTurn = async (player, i) => {
      console.log('get turn')
      
      let code = 'one'
      let category = 9

      switch(i){
        case Number(0) :
          code = 'one';
          category = 9;
          break;
        case Number(1) :
          code = 'two';
          category = 21;
          break;
        case Number(2) :
          code = 'three';
          category = 17;
          break;
        case Number(3) :
          code = 'four';
          category = 23;
          break;
        case Number(4) :
          code = 'five';
          category = 11;
          break;
        case Number(5) :
          code = 'six';  
          category = 25;
          break;
      }

      let color ={
        idx:i,
        code
      }
      
      const proxyURL = "https://afternoon-castle-81655.herokuapp.com/"
      // const targetURL='https://opentdb.com/api.php?amount=20'
      const targetURL='https://opentdb.com/api.php?amount=1&category='

      let res

      try {
        res = await axios.get(`${proxyURL}${targetURL}${category}`);
        console.log('res',res)
      } catch (err) {
        console.log(err)
      }

      let question = res.data.results[0];
      console.log("qustion", question)

   

      let layout = Math.floor(Math.random() * 4)
      
      dispatch({
        type: GET_TURN,
        payload:{ player, color, layout, question }
      })
    }

    const initGame = async  (numberOfPlayers) => {
      const proxyURL = "https://afternoon-castle-81655.herokuapp.com/"
      const targetURL='https://opentdb.com/api.php?amount=20'
      // const targetURL='https://opentdb.com/api.php?amount=20&category='

        const res = await axios.get(`${proxyURL}${targetURL}`);
        let players =[]
        for(let i=1; i<=numberOfPlayers; i++){
          players.push(
            {
              id:i,
              score:[[false,'one'],[false,'two'], [false,'three'], [false, 'four'],[false, 'five'], [false, 'six']], 
              correct:0
            }
          )
        }

      dispatch({
        type: INIT_GAME,
        payload: 
        {
          questions: res.data.results,
          numberOfPlayers,
          players
        }
      })
    }

    const correctAnswer = (p) => {
      dispatch({
        type: CORRECT_ANSWER,
        payload:p
      });
    }

    const gameOver = (initialState) => {
      dispatch({
        type: GAME_OVER,
        payload:initialState
      });
    }

  
    const getQuestions = async () => {
      console.log('getQuestions')
      const proxyURL = "https://afternoon-castle-81655.herokuapp.com/"
      const targetURL='https://opentdb.com/api.php?amount=20'
      // const targetURL='https://opentdb.com/api.php?amount=20&category='

      try {
        const res = await axios.get(`${proxyURL}${targetURL}`);
        console.log('res',res)
        dispatch({
          type: GET_QUESTIONS,
          payload: res.data.results
        });
      } catch (err) {
        dispatch({
          type: QUESTIONS_ERROR,
          payload: err
        });
      }
    };

    const removeQuestion = (questions) => {
      dispatch({
        type: REMOVE_QUESTION,
        payload:questions
      });
    }

    // useEffect(() => {
    //   getStorage()
    // }, [])

    const getStorage = () => {
      console.log('get store')
      const storage = localStorage.getItem('state')
      console.log(storage)
      const storagePayload = storage ? JSON.parse(storage) : initialState
      console.log(storagePayload)
      dispatch({
        type: GET_STORAGE,
        payload: storagePayload
      });
    }

    useEffect(() => {
      localStorage.setItem("state", JSON.stringify(state))
    })
            
    return (
        <GameContext.Provider
          value={{
            colors: state.colors,
            catigories: state.catigories,
            players:state.players,
            numberOfPlayers:state.numberOfPlayers,
            questions: state.questions,
            turn: state.turn,
            init:state.init,
            // useEffect,
            initGame,
            getTurn, 
            getQuestions,
            removeQuestion,
            correctAnswer,
            gameOver,
            getStorage
          }}
        >
          {props.children}
        </GameContext.Provider>
      );

}

export default GameState;    