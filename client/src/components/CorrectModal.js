import React, {useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
var he = require('he');

const CorrectModal = ({correctAnswer}) => {
    
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Modal 
            className="correctModal"
            show={show} 
            onHide={handleClose}
            centered
            size="lg"
        >  
            <Modal.Body className='p-30' style={{color:'hsla(111, 100%, 27%, 1)', textAlign:'center'}}>
                <div>
                    <h2>Correct!</h2>
                    <h3>
                        Answer: {he.decode(correctAnswer)}
                    </h3>
                </div>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default CorrectModal
