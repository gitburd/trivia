import React, {useContext} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import GameContext from '../context/game/gameContext'

const Nav = () => {
    const gameContext = useContext(GameContext)
    const {  gameOver, init} = gameContext
    
    const onClick = (e) => {
        e.preventDefault()
        gameOver()
    }

    return (
        <Navbar className="border-bottom">
            <Navbar.Brand href="#home" style={{fontSize:'26px'}}>
                <b>
                    <span className="color-one">T</span>
                    <span className="color-two">R</span>
                    <span className="color-three">I</span>
                    <span className="color-four">V</span>  
                    <span className="color-five">I</span>
                    <span className="color-six">A</span>
                </b>
            </Navbar.Brand>
            
            {init && (
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text onClick={e=>{onClick(e)}}>
                        <a href="#!">New Game</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            )}
            
        </Navbar>
    )
}

export default Nav
