import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class CommModal extends Component {
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
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <>
        <div className="container"></div>
        <div className="row">
          <a
            className="qModBtn waves-effect waves-light btn modal-trigger"
            data-target="modal3"
          >
            Add a Comment
            <i className="add-comment material-icons">insert_comment</i>
          </a>

          <div
            ref={(Modal) => {
              this.Modal = Modal;
            }}
            id="modal3"
            className="modal"
          >
            {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
            <div className="container">
              <div className="modal-content">
                <h5 className="center-align">Add Your Comment Below</h5>


                <div className="divider"></div>


                <div className="container">
                  <div className="row">
                    <form className="col s12 push-s1">
                      <div className="row">
                        <div className="input-field commInput">
                          <textarea
                            id="textarea1"
                            className="materialize-textarea"
                          ></textarea>
                          <label for="textarea1">Enter your comments here</label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="modal-footer">
              <button
                className="btn waves-effect waves-light col s6 postBtn"
                type="submit"
                name="action"
              >
                Post Comments
                <i className="material-icons right">send</i>
              </button>
              <a className="modal-close waves-effect waves-green btn">Close</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CommModal;
