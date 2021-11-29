import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ME, GET_POSTS } from "../utils/queries";

export default function Topic() {
  // const [searchParams, setSearchParams] = useSearchParams();

  // const { loading, data } = useQuery(GET_POSTS, {
  //   variables: { name: searchParams.get("name")}
  // });

  //* if data isn't here yet, say so
  // if (loading) {
  //   return <h2>LOADING.......</h2>;
  // }

  //* useEffect(() => {
  //* console.log("HERE");

  //* use searchParams.get("name") in a graphQL call to the Topic db to populate page with the correct questions
  //* need to use useQuery with the correct queries and typedefs to get the topics to populate here
  //*console.log(searchParams.get("name"))
  //* })
  return (
    <div>
      <h3>
        Welcome to the HTML study forum!
      </h3>
      <button class="waves-effect waves-light btn-large">Ask a Question</button>
      <div className="container">
      <div class="row">
        <div class="col s12 m12">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                Question Example - I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">See Comments</a>
              <a href="#">Comment Button</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
