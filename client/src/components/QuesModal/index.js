import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class QuesModal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <div>
        <a
          className="qModBtn waves-effect waves-light btn modal-trigger"
          data-target="modal1"
        >
          Ask a Question
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
            <h4>Post a Question</h4>
            <p>FORM GOES HERE</p>
          </div>
          <div className="modal-footer">
            <a className="modal-close waves-effect waves-red btn-flat">
              Disagree
            </a>
            <a className="modal-close waves-effect waves-light btn">
              Close
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default QuesModal;