import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";
import { Collapsible, CollapsibleItem } from 'react-materialize';


const SeeCommModal = (props) => {


      return (
        <>
        <div>
        <Collapsible accordion>
  <CollapsibleItem
        expanded={false}
        header="SEE COMMENTS."
        node="div"
      >
    {props.commData.map(comment => {
       return (
          <div className="row">
            <div className="col s12 m12">
              <div className="blue-grey darken-1">
                <div className="card-content white-text">
                  <h8 className="comment-author">By: {comment.author.username}</h8>
                  <p>{comment.content}</p>
                  <p>{comment.upvotes}</p>
                </div>
              </div>
            </div>
          </div>

       )
     })
  }
           </CollapsibleItem>
          </Collapsible>
        </div>
        </>
      );
    
};

export default SeeCommModal;