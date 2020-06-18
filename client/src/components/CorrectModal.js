import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
var he = require('he');

class Modal extends Component {
  componentDidMount() {
   
    const options = {
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
    let instance = M.Modal.getInstance(this.Modal);
    instance.open();

    const timer = setTimeout(() => {
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