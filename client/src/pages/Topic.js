import React, { useContext, useEffect } from "react";
//* import { Link } from "react-router-dom";
import SeeCommModal from "../components/SeeCommModal";
import CommModal from "../components/CommModal";
import addAPost from "../components/Post";
import { useSearchParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_TOPIC_BY_NAME } from "../utils/queries";
import "./styles/topic.css";
import { ADD_COMMENT, CREATE_COMMENT } from "../utils/mutations";

const Topic = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const forumName = searchParams.get("name");

  const { loading, error, data } = useQuery(GET_TOPIC_BY_NAME, {
    variables: { name: searchParams.get("name") },
  });


  const postData = data?.getTopicByName || [];


  // console.log(postData.posts[0].content)
  const postArray = postData.posts;
  console.log("HERE!", postData);

  return (
    <>
    <div className="study-topics">
          <div className="container forum-topic">
            <div className="row forum-content">
              <div className="col s8">
                <h4 className="topic-header">
                  Welcome to the {forumName} Forum
                </h4>
              </div>
              <div className="col s4">
                <QuesModal />
              </div>
    {loading ? (<h2>LOADING.......</h2>)
    : postArray.map(post => {
      return (
              <div className="col s12 m12">
                <div className="darken-1 topic-card">
                  <div className="card-content topic-text">
                    <h5 className="post-author">By: {post.author.username}</h5>
                    <span class="card-title">{post.question}</span>
                    <p>{post.content}</p>
                  </div>
                  {/* display flex on following div so that the button goes beside the input */}
                  <div className="comment-form">
                    <div className="input-field comment-input col s8">
                      <input
                        id="comment_text"
                        type="text"
                        className="validate"
                      ></input>
                      <label for="textarea1">Enter your comments here</label>
                    </div>
                    <button
                      className="btn waves-effect waves-light col s2 postBtn"
                      type="submit"
                      name="action"
                    >
                      Comment
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                  <div className="container comment-box card-action">
                    <h6 className="comments-header">
                      Comments{" "}
                      <span className="comments material-icons">forum</span>
                    </h6>
                    <SeeCommModal commData={post.comments} />
                  </div>
                </div>
              </div>)}
    )}
                </div>
          </div>
        </div>
        </>
    );
};

export default Topic;
