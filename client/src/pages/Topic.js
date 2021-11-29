import React, { useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { useMutation, useQuery } from "@apollo/client";
import { GET_ME, GET_TOPIC_BY_NAME } from "../utils/queries";

export default function Topic() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const { loading, data } = useQuery(GET_TOPIC_BY_NAME, {
    variables: { name: searchParams.get("name")}
  });

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING.......</h2>;
  }
  
  console.log(data)
  const postData = data?.getTopicByName || [];
  console.log(postData)

  // console.log(postData)
  
  //! useEffect(() => {
    //! console.log("HERE");

    //* use searchParams.get("name") in a graphQL call to the Topic db to populate page with the correct questions
    //* need to use useQuery with the correct queries and typedefs to get the topics to populate here
    // console.log(searchParams.get("name"))
  //! })
    return (
      <div>
        
        <h1>{postData}</h1>
        

      
      </div>
    );
  }