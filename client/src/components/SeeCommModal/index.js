import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import { useQuery } from "@apollo/client";
import { GET_TOPIC_BY_NAME } from "../../utils/queries";
import { useSearchParams } from "react-router-dom";

const SeeCommModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { loading, error, data } = useQuery(GET_TOPIC_BY_NAME, {
    variables: { name: searchParams.get("name") }
  });

  const postData = data?.getTopicByName || [];

  for (let i = 0; i < postData.posts.length; i++) {

    const commentArray = postData.posts[i].comments;
    const commentAuthor = postData.posts[i].comments[i].author.username;
    const commentContent = postData.posts[i].comments[i].content;

    for (let i = 0; i < commentArray.length; i++) {
      return (
        <div className="container">
          <div className="row">
            <div className="col s12 m12">
              <div className="blue-grey darken-1">
                <div className="card-content white-text">
                  <h8>By: {commentAuthor}</h8>
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