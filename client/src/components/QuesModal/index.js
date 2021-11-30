import React, { Component, useState, useEffect } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
//* import Auth from '../utils/auth'; 

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
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }
   PostForm = () => {
    
  };

  render() {
    return (
      <div className="container">
        <div>
          <a
            className="qModBtn waves-effect waves-light btn modal-trigger"
            data-target="modal1"
          >
            Ask a Question
          </a>
        </div>

        <div
          ref={(Modal) => {
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
            <div>
              <h4>Post Question and Details below</h4>
            </div>
            <div class="divider"></div>
            <div className="container">
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <form class="col s12">
                      <div class="row">
                        <div class="input-field col s12">
                          <textarea
                            id="textarea1"
                            class="materialize-textarea"
                          ></textarea>
                          <label for="textarea1">Question Title</label>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="row">
                    <form class="col s12">
                      <div class="row">
                        <div class="input-field col s12">
                          <textarea
                            id="textarea1"
                            class="materialize-textarea"
                          ></textarea>
                          <label for="textarea1">
                            Question details and Examples
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="divider"></div>

          <div className="container">
            <div className="modal-footer">
              <button
                class="btn waves-effect waves-light col s6"
                type="submit"
                name="action"
              >
                Submit Question
                <i class="material-icons right">send</i>
              </button>
              <a className="modal-close waves-effect waves-light btn">Close</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuesModal;
