import React, {useContext, useEffect, useState} from 'react'
import Turn from './Turn'
import GameContext from '../context/game/gameContext'
import Setup from './SetUp'
import Nav from './Nav'
import  q from '../img/q.jpg'

const Game = () => {
    const gameContext = useContext(GameContext)
    const { turn, getStorage, init, getTurn, error } = gameContext
    
    useEffect(() => {
        // eslint-disable-next-line
        getStorage()
    }, []);

    if(error){
        return(
            <div>
                <h2>Currently unavailable. Please check back later.</h2> 
            </div>
        )
    }else if(!init){
        return(
            <div>
                <img  className='bg' src={q} />
                <Nav/>
                <div className='container'>
                    <Setup/>
                </div>
            </div>
        )
    }else if(!turn){
        let i = Math.floor(Math.random() * 6) 
        console.log('game getturn')
        getTurn(1, i)
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div >
            <img  className='bg' src={q} />
            <Nav/>
            <div className='container'>
                <Turn/>   
            </div>
        </div>
    )
}

export default Game