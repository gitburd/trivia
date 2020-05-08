import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
var he = require('he');

class Modal extends Component {
  componentDidMount() {
   
    const options = {
     
    //   inDuration: 250,
    //   outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
    let instance = M.Modal.getInstance(this.Modal);
    instance.open();

    const timer = setTimeout(() => {
        console.log("cm timer")
        instance.close();
        instance.destroy()
    }, 2500);
    return () => clearTimeout(timer);
  }

  render() {
    const {correctAnswer} = this.props

    return (
        <div
          ref={Modal => {this.Modal = Modal}}
          id="modal1"
          className="modal correctModal"
        >
            <div  className="white mo">
                <h2>Correct!</h2>
                <p style={{fontSize:'24px'}}> Answer: {he.decode(correctAnswer)} </p>
            </div>
      </div>
    );
  }
}

export default Modal;

// const CorrectModal = ({correctAnswer}) => {
    
//     // const [show, setShow] = useState(true);

//     // const handleClose = () => setShow(false);
//     // const handleShow = () => setShow(true);

//     return (
//         <>

//         <div 
//             className="correctModal modal"
//             // show={show} 
//             // onHide={handleClose}
//             id="cModal">
//             <div class="modal-content">
//             <h2>Correct!</h2>
//                     <h3>
                        // {/* Answer: {he.decode(correctAnswer)} */}
//                     </h3>
//             </div>
//             {/* <div class="modal-footer">
//             <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
//             </div> */}
//         </div>


//         {/* <Modal 
//             className="correctModal"
//             show={show} 
//             onHide={handleClose}
//             centered
//             size="lg"
//         >  
//             <Modal.Body className='p-30' style={{color:'hsla(111, 100%, 27%, 1)', textAlign:'center'}}>
//                 <div>
//                     <h2>Correct!</h2>
//                     <h3>
//                         Answer: {he.decode(correctAnswer)}
//                     </h3>
//                 </div>
//             </Modal.Body>
//         </Modal> */}
//         </>
//     )
// }

// export default CorrectModal
