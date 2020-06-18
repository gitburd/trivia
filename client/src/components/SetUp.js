import React, {useContext, useState} from 'react'
import GameContext from '../context/game/gameContext'
import Topics from './Topics'

const SetUp = () => {
    const gameContext = useContext(GameContext)
    const { initGame } = gameContext
    const [playersCount, setPlayersCount] = useState(4)

    const [topic1, setTopic1] = useState('General Knowledge')
    const [topic2, setTopic2] = useState('General Knowledge')
    const [topic3, setTopic3] = useState('General Knowledge')
    const [topic4, setTopic4] = useState('General Knowledge')
    const [topic5, setTopic5] = useState('General Knowledge')
    const [topic6, setTopic6] = useState('General Knowledge')

    let topics = [topic1,topic2,topic3,topic4,topic5,topic6]

    const onInitClick = () => { 
        initGame(playersCount, topics)
    }

    const onLeftClick = () => {
        if(playersCount > 1){
            setPlayersCount(playersCount-1)
        }
    }

    const onRightClick = () => {
        if(playersCount <10){
            setPlayersCount(playersCount+1)
        }
    }

    return (
        <div className="white col s12 center p-20">
            <div className="row">
                <div className="card-panel z-depth-0">
                    <h1>Number of Players</h1>
                    <span className="p-20" style={{textAlign:'center', fontSize:'36px'}}>  
                        <i 
                            onClick= {() => onLeftClick()}
                            className='fas fa-angle-left p-20 arrow'
                        > </i>
                        {playersCount}
                        <i 
                            className='fas fa-angle-right p-20 arrow'
                            onClick= {() => onRightClick()}
                        > </i> 
                    </span>
                    <h1>Topics</h1>
                    
                    <div className="input-field col s6 m4">
                        <select className="browser-default" onChange={e => setTopic6(e.target.value)}>
                            <option value="General Knowledge" >General Knowledge</option>
                            {Topics && Topics.map(topic =>(
                                <option key={topic}>{topic}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-field col s6 m4">
                        <select className="browser-default" onChange={e => setTopic5(e.target.value)}>
                            <option value="General Knowledge" >General Knowledge</option>
                            {Topics && Topics.map(topic =>(
                                <option key={topic}>{topic}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-field col s6 m4">
                        <select className="browser-default" onChange={e => setTopic4(e.target.value)}>
                            <option value="General Knowledge" >General Knowledge</option>
                            {Topics && Topics.map(topic =>(
                                <option key={topic}>{topic}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-field col s6 m4">
                        <select className="browser-default" onChange={e => setTopic3(e.target.value)}>
                            <option value="General Knowledge" >General Knowledge</option>
                            {Topics && Topics.map(topic =>(
                                <option key={topic}>{topic}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-field col s6 m4">
                        <select className="browser-default" onChange={e => setTopic2(e.target.value)}>
                            <option value="General Knowledge" >General Knowledge</option>
                            {Topics && Topics.map(topic =>(
                                <option key={topic}>{topic}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-field col s6 m4">
                        <select className="browser-default" onChange={e => setTopic1(e.target.value)}>
                            <option value="General Knowledge" >General Knowledge</option>
                            {Topics && Topics.map(topic =>(
                                <option key={topic}>{topic}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
           
            <button 
                className="btn waves-effect waves-light answer" 
                onClick= {() => onInitClick()}
            >Let's Go!
            </button>  
        </div>
    )
}

export default SetUp
