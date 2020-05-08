import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
var he = require('he');

class Modal extends Component {
  componentDidMount() {
   
    const options = {
      
    //   outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
    let instance = M.Modal.getInstance(this.Modal);
    instance.open();

    const timer = setTimeout(() => {
        console.log("winner timer")
        instance.close();
        instance.destroy()
    }, 2500);
    return () => clearTimeout(timer);
  }

  render() {
    const {player} = this.props

    return (
        <div
          ref={Modal => {this.Modal = Modal}}
          id="modal3"
          className="modal winnerModal"
        >
            <div  className="white mo">
            <h2>Winner!</h2>
                <h3>
                    Player {player}
                </h3>
            </div>
      </div>
    );
  }
}

export default Modal;
