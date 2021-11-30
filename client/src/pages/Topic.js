import React, { useEffect } from "react";
//* import { Link } from "react-router-dom";
import SeeCommModal from "../components/SeeCommModal";
import CommModal from "../components/CommModal";
import QuesModal from "../components/QuesModal";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_TOPIC_BY_NAME } from "../utils/queries";

const Topic = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const forumName = searchParams.get("name");

  const { loading, error, data } = useQuery(GET_TOPIC_BY_NAME, {
    variables: { name: searchParams.get("name")}
  });

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING.......</h2>;
  }
  
  const postData = data?.getTopicByName || [];
  // console.log(postData.posts[0].content)
  const postArray = postData.posts
  
  for (let i=0; i<postArray.length; i++) {
    
    const postContent = postData.posts[i].content;
    const postAuthor = postData.posts[i].author.username;
    console.log(postAuthor)

    return (
      <>
        <div className="container">
          <div class="row">
            <div className="col s8">
              <h4>
                Welcome to the {forumName} Forum 
              </h4>
            </div>
            <div className="col s4">
            <QuesModal />
            </div>
            <div class="col s12 m12">
              <div class="blue-grey darken-1">
                <div class="card-content white-text">
                  <h5>By: {postAuthor}</h5>
                  {/* <span class="card-title">Post Title</span> */}
                  <p>
                    {postContent}
                  </p>
                </div>
                {/* display flex on following div so that the button goes beside the input */}
                <div className = "commentForm"> 
                  <div class="input-field commInput">
                    <textarea
                      id="textarea1"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="textarea1">Enter your comments here</label>
                  </div>
                  <button
                    class="btn waves-effect waves-light col s6 postBtn"
                    type="submit"
                    name="action"
                  >
                    Comment
                    <i class="material-icons right">send</i>
                  </button>
                </div>
                <div class="card-action">
                  <span class="comments material-icons">forum</span>
                  <h6>Comments</h6>
                  <SeeCommModal />
                  <CommModal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Topic;