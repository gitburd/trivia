import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import GameContext from './gameContext';
import gameReducer from './gameReducer';
import {
  GET_TURN,
  QUESTION_ERROR,
  CORRECT_ANSWER,
  GAME_OVER,
  INIT_GAME,
  GET_STORAGE,
  SET_DICE
} from '../types'

const GameState = props => {
    const initialState = {
        colors:[ {code:'one', idx:0}, {code:'two', idx:2}, {code:'three', idx:3}, {code:'four', idx:3}, {code:'five', idx:4}, {code:'six', idx:5},],
        catigories:{
          'General Knowledge':9,
          'Art':25,
          'Books':10,
          'Film':11,
          'Geography':22, 
          'Computers':18,
          'Mythology':20,
          'Animals':27,
          'Celebrities':26,
          'Sports':21,
          'Politics':24,
          'History':23,
          'TV':14,
          'Video Games': 15,
          'Board Games':16,
          'Music':12,
          'Nature': 17
        },
        
        players:[],
        numberOfPlayers:4,
        turn:null,
        questions:[],
        init:false
    };

            
    const [state, dispatch] = useReducer(gameReducer, initialState);

    const getTurn = async (player, i) => {
      console.log('get turn')
      let code = 'one'

      switch(i){
        case Number(0) :
          code = 'one';
          break;
        case Number(1) :
          code = 'two';
          break;
        case Number(2) :
          code = 'three';
          break;
        case Number(3) :
          code = 'four';
          break;
        case Number(4) :
          code = 'five';
          break;
        case Number(5) :
          code = 'six';  
          break;
      }
      const category = state.topics[i]
      const color ={
        idx:i,
        code        
      }

      const proxyURL = "https://afternoon-castle-81655.herokuapp.com/"
      const targetURL='https://opentdb.com/api.php?amount=1&category='
      try {
        let res = await axios.get(`${proxyURL}${targetURL}${category}`)
          .then( res => {
            let question = res.data.results[0];
            let layout = Math.floor(Math.random() * 4)

            dispatch({
              type: GET_TURN,
              payload:{ 
                player, 
                color, 
                layout, 
                question
              }
            })
          }
        )
      } catch (err) {
        console.log(err)
        dispatch({
          type: QUESTION_ERROR,
          payload: err
        })
      }
    }

    const initGame = async  (numberOfPlayers, topics) => {
      console.log(topics)

      const  topicsListFull = {
        'General Knowledge':9,
        'Art':25,
        'Books':10,
        'Film':11,
        'Geography':22, 
        'Computers':18,
        'Mythology':20,
        'Animals':27,
        'Celebrities':26,
        'Sports':21,
        'Politics':24,
        'History':23,
        'TV':14,
        'Video Games': 15,
        'Board Games':16,
        'Music':12,
        'Nature': 17,
        'Math':19
      }
      
      let stateTopics = []
      topics.forEach(topic => {
        stateTopics.push(topicsListFull[topic])
      });
      
      console.log('state topics ', stateTopics)
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
        payload: {
          numberOfPlayers,
          players,
          stateTopics
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

    const setDice = (die1, die2) => {
      dispatch({
        type: SET_DICE,
        payload:{die1, die2}
      });
    }

    const getStorage = () => {
      const storage = localStorage.getItem('state')
      const storagePayload = storage ? JSON.parse(storage) : initialState
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
            initGame,
            getTurn, 
            correctAnswer,
            setDice,
            gameOver,
            getStorage
          }}
        >
          {props.children}
        </GameContext.Provider>
      );

}

export default GameState;    