import {
    GET_TURN,
    CORRECT_ANSWER,
    INIT_GAME,
    GAME_OVER,
    SET_DICE,
    QUESTION_ERROR,
    GET_STORAGE
  } from '../types'

  export default (state, action) => {
    switch(action.type){
        case INIT_GAME:
            return{
                ...state,
                numberOfPlayers: action.payload.numberOfPlayers,
                players:action.payload.players,
                init:true,
                topics:action.payload.stateTopics,
                token:action.payload.token
            }
        case GET_TURN:
            return{
                ...state,
                turn:action.payload,    
                loading:false
            }    
        case  CORRECT_ANSWER:
            return{
                ...state,
                players:action.payload,
                loading:false
            }
        case SET_DICE:
            return{
                ...state,
                die1:action.payload.die1,
                die2:action.payload.die2
            }
        case GET_STORAGE:
            return{
                ...action.payload
            }    
        case GAME_OVER:
        return{
            ...action.payload
        }        
        case QUESTION_ERROR:
            return{
                ...state,
                error: action.payload
            }        
        default:
            return state
    }
}