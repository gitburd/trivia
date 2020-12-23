import React, {useContext, useState} from 'react'
import GameContext from '../context/game/gameContext'

const SetUp = () => {
    const gameContext = useContext(GameContext)
    const { initGame } = gameContext
    const [playersCount, setPlayersCount] = useState(4)

    const topicOptions = [
        {value:9, label: 'General Knowledge'},
        {value:25, label: 'Art'},
        {value:10, label: 'Books'},
        {value:11, label: 'Film'},
        {value:22,  label: 'Geography'},
        {value:18, label: 'Computers'},
        {value:20, label: 'Mythology'},
        {value:27, label: 'Animals'},
        {value:26, label: 'Celebrities'},
        {value:21, label: 'Sports'},
        {value:24, label: 'Politics'},
        {value:23, label: 'History'},
        {value:14, label: 'TV'},
        {value: 15, label: 'Video Games'},
        {value:16, label: 'Board Games'},
        {value:12, label: 'Music'},
        {value: 17, label: 'Nature'},
        {value:19, label: 'Math'},
    ]


    const [topic1, setTopic1] = useState(parseInt(topicOptions[0].value))
    const [topic2, setTopic2] = useState(parseInt(topicOptions[0].value))
    const [topic3, setTopic3] = useState(parseInt(topicOptions[0].value))
    const [topic4, setTopic4] = useState(parseInt(topicOptions[0].value))
    const [topic5, setTopic5] = useState(parseInt(topicOptions[0].value))
    const [topic6, setTopic6] = useState(parseInt(topicOptions[0].value))

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
                        <select className="browser-default" onChange={e => setTopic6(parseInt(e.target.value))}>
                            {topicOptions && topicOptions.map(topic =>(
                                <option key={topic.value} value={topic.value}>{topic.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-field col s6 m4">
                        <select className="browser-default" onChange={e => setTopic5(parseInt(e.target.value))}>
                            {topicOptions && topicOptions.map(topic =>(
                                <option key={topic.value} value={topic.value}>{topic.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-field col s6 m4">
                        <select className="browser-default" onChange={e => setTopic4(parseInt(e.target.value))}>
                            {topicOptions && topicOptions.map(topic =>(
                                <option key={topic.value} value={topic.value}>{topic.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-field col s6 m4">
                        <select className="browser-default" onChange={e => setTopic3(parseInt(e.target.value))}>
                            {topicOptions && topicOptions.map(topic =>(
                                <option key={topic.value} value={topic.value}>{topic.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-field col s6 m4">
                        <select className="browser-default" onChange={e => setTopic2(parseInt(e.target.value))}>
                            {topicOptions && topicOptions.map(topic =>(
                                <option key={topic.value} value={topic.value}>{topic.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-field col s6 m4">
                        <select className="browser-default" onChange={e => setTopic1(parseInt(e.target.value))}>
                            {topicOptions && topicOptions.map(topic =>(
                                <option key={topic.value} value={topic.value}>{topic.label}</option>
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
