import React, {useContext} from 'react'
import GameContext from '../context/game/gameContext'

const Nav = () => {
    const gameContext = useContext(GameContext)
    const {  gameOver, init} = gameContext
    
    const onClick = (e) => {
        e.preventDefault()
        gameOver()
    }
    
    return (
        <nav>
            <div className="nav-wrapper white p-lr-20">
                <a  className="brand-logo">
                    <b>
                        <span className="color-one">T</span>
                        <span className="color-two">R</span>
                        <span className="color-three">I</span>
                        <span className="color-four">V</span>  
                        <span className="color-five">I</span>
                        <span className="color-six">A</span>
                    </b>
                </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">

                {init && (
                    <li >
                        <button 
                            className="btn waves-effect waves-light answer" 
                            onClick={e=>{onClick(e)}}
                        >
                            New Game
                        </button>
                    </li>
                )}  
            
            </ul>
            </div>
        </nav>
    )
}

export default Nav
