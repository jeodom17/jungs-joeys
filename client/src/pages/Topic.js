import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SeeCommModal from "../components/SeeCommModal";
import CommModal from "../components/CommModal";
import QuesModal from "../components/QuesModal";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ME, GET_TOPIC_BY_NAME } from "../utils/queries";

const Topic = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
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
  const postContent = postData.posts[0].content;
  const postAuthor = postData.posts[0].author;

  //! useEffect(() => {
    //! console.log("HERE");

    //* use searchParams.get("name") in a graphQL call to the Topic db to populate page with the correct questions
    //* need to use useQuery with the correct queries and typedefs to get the topics to populate here
    // console.log(searchParams.get("name"))
  //! })
  
  for (let i=0; i<postArray.length; i++) {
    return (
      <>
        <div className="container">
          <div class="row">
            <div class="col s12 m12">
              <div class="blue-grey darken-1">
                <div class="card-content white-text">
                  <h5>By: {postAuthor} ... fix post Author</h5>
                  <span class="card-title">Post Title</span>
                  <p>
                    {postContent}
                  </p>
                </div>
                <div class="card-action">
                  <span class="comments material-icons">forum</span>
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