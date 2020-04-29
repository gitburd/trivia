import React, {useContext, useState} from 'react'
import Button from 'react-bootstrap/Button'
import GameContext from '../context/game/gameContext'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

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

    const onInitClick = (e) => { 
        // e.preventDefault;
        initGame(playersCount, topics)
    }

    const onLeftClick = (e) => {
        // e.preventDefault;
        if(playersCount > 1){
            setPlayersCount(playersCount-1)
        }
    }

    const onRightClick = (e) => {
        // e.preventDefault;
        if(playersCount <10){
            setPlayersCount(playersCount+1)
        }
    }

    return (
        <div >
            <Card body  style={{width:'100%', textAlign:'center', marginTop:'100px'}}>
            <div style={{fontSize:'36px'}}>
                <h1>Number of Players</h1>
                <span className="p-20" style={{textAlign:'center'}}>  
                    <i 
                        onClick= {e => onLeftClick(e)}
                        className='fas fa-angle-left p-20 arrow'
                    > </i>
                    {playersCount}
                    <i 
                        className='fas fa-angle-right p-20 arrow'
                        onClick= {e => onRightClick(e)}
                    > </i> 
                </span>
                <h1>Topics</h1>
            </div>

            <Form style={{width:'100%'}}>
            <Container>
                <Row>
                    <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        {/* <Form.Label>Example select</Form.Label> */}
                        <Form.Control 
                            as="select"
                            onChange={e => setTopic6(e.target.value)}
                        >
                            <option>General Knowledge</option>
                            <option>Animals</option>
                            <option>Art</option>
                            <option>Board Games</option>
                            <option>Books</option>
                            <option>Celebrities</option>
                            <option>Computers</option>
                            <option>Film</option>
                            <option>Geography</option>
                            <option>History</option>                                
                            <option>Math</option>
                            <option>Music</option>
                            <option>Mythology</option>
                            <option>Nature</option>
                            <option>Politics</option>
                            <option>Sports</option>
                            <option>TV</option>
                            <option>Video Games</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        {/* <Form.Label>Example select</Form.Label> */}
                        <Form.Control 
                            as="select"
                            onChange={e => setTopic5(e.target.value)}
                        >
                            <option>General Knowledge</option>
                            <option>Animals</option>
                            <option>Art</option>
                            <option>Board Games</option>
                            <option>Books</option>
                            <option>Celebrities</option>
                            <option>Computers</option>
                            <option>Film</option>
                            <option>Geography</option>
                            <option>History</option>                                
                            <option>Math</option>
                            <option>Music</option>
                            <option>Mythology</option>
                            <option>Nature</option>
                            <option>Politics</option>
                            <option>Sports</option>
                            <option>TV</option>
                            <option>Video Games</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        {/* <Form.Label>Example select</Form.Label> */}
                        <Form.Control 
                            as="select"
                            onChange={e => setTopic4(e.target.value)}
                        >
                            <option>General Knowledge</option>
                            <option>Animals</option>
                            <option>Art</option>
                            <option>Board Games</option>
                            <option>Books</option>
                            <option>Celebrities</option>
                            <option>Computers</option>
                            <option>Film</option>
                            <option>Geography</option>
                            <option>History</option>                                
                            <option>Math</option>
                            <option>Music</option>
                            <option>Mythology</option>
                            <option>Nature</option>
                            <option>Politics</option>
                            <option>Sports</option>
                            <option>TV</option>
                            <option>Video Games</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>    
                </Row>

                <Row>
                    <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        {/* <Form.Label>Example select</Form.Label> */}
                        <Form.Control 
                            as="select"
                            onChange={e => setTopic3(e.target.value)}
                        >
                            <option>General Knowledge</option>
                            <option>Animals</option>
                            <option>Art</option>
                            <option>Board Games</option>
                            <option>Books</option>
                            <option>Celebrities</option>
                            <option>Computers</option>
                            <option>Film</option>
                            <option>Geography</option>
                            <option>History</option>                                
                            <option>Math</option>
                            <option>Music</option>
                            <option>Mythology</option>
                            <option>Nature</option>
                            <option>Politics</option>
                            <option>Sports</option>
                            <option>TV</option>
                            <option>Video Games</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        {/* <Form.Label>Example select</Form.Label> */}
                        <Form.Control 
                            onChange={e => setTopic2(e.target.value)}
                            as="select">
                            <option>General Knowledge</option>
                            <option>Animals</option>
                            <option>Art</option>
                            <option>Board Games</option>
                            <option>Books</option>
                            <option>Celebrities</option>
                            <option>Computers</option>
                            <option>Film</option>
                            <option>Geography</option>
                            <option>History</option>                                
                            <option>Math</option>
                            <option>Music</option>
                            <option>Mythology</option>
                            <option>Nature</option>
                            <option>Politics</option>
                            <option>Sports</option>
                            <option>TV</option>
                            <option>Video Games</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        {/* <Form.Label>Example select</Form.Label> */}
                        <Form.Control 
                            as="select"
                            onChange={e => setTopic1(e.target.value)}
                        >
                        <option>General Knowledge</option>
                            <option>Animals</option>
                            <option>Art</option>
                            <option>Board Games</option>
                            <option>Books</option>
                            <option>Celebrities</option>
                            <option>Computers</option>
                            <option>Film</option>
                            <option>Geography</option>
                            <option>History</option>                                
                            <option>Math</option>
                            <option>Music</option>
                            <option>Mythology</option>
                            <option>Nature</option>
                            <option>Politics</option>
                            <option>Sports</option>
                            <option>TV</option>
                            <option>Video Games</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>    
                </Row>
            
            </Container>
            </Form>
            <Button 
                // className='answer' 
                onClick= {e => onInitClick(e)}
                variant="outline-dark"
            > 
                Let's Go!
            </Button>
            </Card>
            
        </div>
    )
}

export default SetUp
