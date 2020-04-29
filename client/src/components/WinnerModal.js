import React, {useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
var he = require('he');

const WinnerModal = ({player}) => {
    
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Modal 
            className="winnerModal"
            show={show} 
            onHide={handleClose}
            centered
            size="lg"
        >  
            <Modal.Body className='p-30' style={{color:'hsla(293, 100%, 28%, 1)', textAlign:'center'}}>
                <div>
                    <h2>Winner!</h2>
                    <h3>
                        Player {player}
                    </h3>
                </div>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default WinnerModal
