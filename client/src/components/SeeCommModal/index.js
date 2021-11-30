import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import { useQuery } from "@apollo/client";
import { GET_TOPIC_BY_NAME } from "../../utils/queries";
import { useSearchParams } from "react-router-dom";

// class SeeCommModal extends Component {
//   // const { loading, error, data } = useQuery(GET_TOPIC_BY_NAME, {
//   //   variables: { name: searchParams.get("name")}
//   // });

//   // // if data isn't here yet, say so
//   // if (loading) {
//   //   return <h2>LOADING.......</h2>;
//   // }


//   componentDidMount() {
//     const options = {
//       onOpenStart: () => {
//         console.log("Open Start");
//       },
//       onOpenEnd: () => {
//         console.log("Open End");
//       },
//       onCloseStart: () => {
//         console.log("Close Start");
//       },
//       onCloseEnd: () => {
//         console.log("Close End");
//       },
//       inDuration: 250,
//       outDuration: 250,
//       opacity: 0.5,
//       dismissible: false,
//       startingTop: "4%",
//       endingTop: "10%"
//     };
//     M.Modal.init(this.Modal, options);

//     // let instance = M.Modal.getInstance(this.Modal);
//     // instance.open();
//     // instance.close();
//     // instance.destroy();
//   }

//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     id: 0
//   //   };
//   // }

//   render() {
//     const {postId} = this.props;
//     const {commentArray} = this.props;
//     const {postCommentAuthor} = this.props;
//     const {postCommentContent} = this.props;

//     return (
//       <div>
//         <a
//           className="qModBtn waves-effect waves-light btn modal-trigger"
//           data-target="modal2"
//         >
//           See Comments 
//         </a>

//         <div
//           ref={Modal => {
//             this.Modal = Modal;
//           }}
//           id="modal2"
//           className="modal"
//         >
  
//           <div className="modal-content">
//             <h4 className="center-align">Comments for:</h4>
//           <div class="divider"></div>

//             <p>author: {postCommentAuthor}</p>
//             <p>comment: {postCommentContent}</p>
//           </div>
//           <div class="divider"></div>
//           <div className="modal-footer">
//             <a className="modal-close waves-effect waves-red btn">
//               Close
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const SeeCommModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const { loading, error, data } = useQuery(GET_TOPIC_BY_NAME, {
    variables: { name: searchParams.get("name")}
  });

  const postData = data?.getTopicByName || [];

  for (let i = 0; i<postData.posts.length; i++) {
    console.log(postData.posts[i].comments)
  
    const postId = postData.posts
    const commentArray = postData.posts[i].comments;
    const commentAuthor = postData.posts[i].comments[i].author;
    const commentContent = postData.posts[i].comments[i].content;
    
    for (let i=0; i<commentArray.length; i++) {
      return (
        <div className="container">
          <div class="row">
            <div class="col s12 m12">
              <div class="blue-grey darken-1">
                <div class="card-content white-text">
                  <h8>By: {commentAuthor} ... fix comment Author</h8>
                  <p>
                    {commentContent}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
 
}

export default SeeCommModal;