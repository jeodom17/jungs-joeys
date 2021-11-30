import React from "react";
//* import { Link } from "react-router-dom";
import SeeCommModal from "../components/SeeCommModal";
import CommModal from "../components/CommModal";
import QuesModal from "../components/QuesModal";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_TOPIC_BY_NAME } from "../utils/queries";

export default function Topic() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const { loading, data } = useQuery(GET_TOPIC_BY_NAME, {
    variables: { name: searchParams.get("name")}
  });

  console.log(searchParams.get("name"))

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING.......</h2>;
  }
  
  console.log(data)
  const postData = data?.getTopicByName || [];
  console.log(postData)

  
    return (
      <>
      <div className="row">
      <div className="col s4">   
        <h3>Welcome{postData}</h3>
      </div> 

      <div className="col s4 offset-s4 section qmodalBtn">

      <QuesModal />

      </div>
      </div>

      <div className="container">
        <div class="row">
          <div class="col s12 m12">
            <div class="blue-grey darken-1">
              <div class="card-content white-text">          
              <i class="material-icons prefix col s1">account_circle</i>
                <h5 className="col s3">User Name</h5>
                <p className="col s2 offset-s6">Date HERE</p>
          <div class="divider"></div>

                <span class="card-title col s12">Post Title</span>
                <p className="col s12">
                  Question Example - I am a very simple card. I am good at
                  containing small bits of information. I am convenient because
                  I require little markup to use effectively.
                </p>
              </div>
              
              <div class="card-action">
                <span class="comments material-icons col s1">forum</span>
                <div className="col s4">

                <SeeCommModal />

                </div>

                <div className="commModalBtn">

                <CommModal />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
