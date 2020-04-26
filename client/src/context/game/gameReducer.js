import {
    GET_TURN,
    GET_QUESTIONS,
    REMOVE_QUESTION,
    CORRECT_ANSWER,
    INIT_GAME,
    GAME_OVER,
    QUESTIONS_ERROR,
    GET_STORAGE
  } from '../types'

  export default (state, action) => {
    switch(action.type){
        case INIT_GAME:
            return{
                ...state,
                questions: action.payload.questions,
                numberOfPlayers: action.payload.numberOfPlayers,
                players:action.payload.players,
                init:true
            }
        case GET_TURN:
            return{
                ...state,
                turn:action.payload,    
                loading:false,
                questions:state.questions.slice(1,state.questions.length)
            }    
        case  CORRECT_ANSWER:
            return{
                ...state,
                players:action.payload,
                loading:false
            }
        case REMOVE_QUESTION:    
        case GET_QUESTIONS:
        return{
                ...state,
                questions:action.payload,
                loading:false
            }
        case GET_STORAGE:
            return{
                ...action.payload
            }    
        case GAME_OVER:
        return{
            ...action.payload
        }        

        default:
            return state
    }
}