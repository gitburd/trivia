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
    // colors:[ {code:'one', idx:0}, {code:'two', idx:2}, {code:'three', idx:3}, {code:'four', idx:3}, {code:'five', idx:4}, {code:'six', idx:5},],
    colors:['one', 'two', 'three',  'four', 'five', 'six'],
    players:[],
    numberOfPlayers:4,
    turn:null,
    questions:[],
    init:false,
    token:''
  };
  const [state, dispatch] = useReducer(gameReducer, initialState);


  const getTurn = async (player, i) => {
    // let code = 'one'

    // switch(i){
    //   case Number(0) :
    //     code = 'one';
    //     break;
    //   case Number(1) :
    //     code = 'two';
    //     break;
    //   case Number(2) :
    //     code = 'three';
    //     break;
    //   case Number(3) :
    //     code = 'four';
    //     break;
    //   case Number(4) :
    //     code = 'five';
    //     break;
    //   case Number(5) :
    //     code = 'six';  
    //     break;
    // }
    // const category = state.topics[i]

    // const color ={
    //   idx:i,
    //   code        
    // }

    const category = state.topics[i]
    const color =  state.newTopics[i].color

    //use an instance of cors-anywhere.herokuapp.com to generate a proxy
    const proxyURL = "https://afternoon-castle-81655.herokuapp.com/"
    const targetURL='https://opentdb.com/api.php?amount=1&category='
    const token=`&token=${state.token}`

    let url 
    
    state.token === '' ? url=`${proxyURL}${targetURL}${category}` : url=`${proxyURL}${targetURL}${category}${token}`
    try {
      let res = await axios.get(url)
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

    let players =[]
    for(let i=1; i<=numberOfPlayers; i++){
      players.push(
        {
          id:i,
          score:{one:false, two:false, three:false, four:false, five:false, six:false}, 
          correct:0
        }
      )
    }

    let newTopics = [
      {topic: topics[0],
        color: "one"
      },
      {topic: topics[1],
        color: "two"
      },
      {topic: topics[2],
        color: "three"
      },
      {topic: topics[3],
        color: "four"
      },
      {topic: topics[4],
        color: "five"
      },
      {topic: topics[5],
        color: "six"
      }
    ]
    //use an instance of cors-anywhere.herokuapp.com to generate a proxy
    const proxyURL = "https://afternoon-castle-81655.herokuapp.com/"
    const targetURL='https://opentdb.com/api_token.php?command=request'
    try {
      let res = await axios.get(`${proxyURL}${targetURL}`)
        .then( res => {
          dispatch({
            type: INIT_GAME,
            payload: {
              numberOfPlayers,
              players,
              stateTopics: topics,
              token:res.data.token,
              newTopics,
              colors:['one', 'two', 'three',  'four', 'five', 'six']
            }
          })
        }
      )
    } catch (err) {
      console.log(err)
      dispatch({
        type: INIT_GAME,
        payload: {
          numberOfPlayers,
          players,
          topics,
          token:'',
          newTopics
        }
      })
    }
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
        colors:['one', 'two', 'three',  'four', 'five', 'six'],
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