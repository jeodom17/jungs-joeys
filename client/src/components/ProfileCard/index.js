import React from "react";
import { Link } from "react-router-dom";
import { Sidenav } from "materialize-css";
import profileImage from "../../assets/image.png";
import "./style.css";

import { useSearchParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries"

export default function SideNav() {
  const [searchParams, setSearchParams] = useSearchParams();
  const username = searchParams.get("name");

  const { loading, error, data } = useQuery(GET_ME, {
    variables: { name: searchParams.get("name")}
  });
// if data isn't here yet, say so
if (loading) {
  return <h2>LOADING.......</h2>;
}

const userData = data?.me || [];

console.log(userData);

  //* const userArray = userData.users
  
  //* for (let i=0; i<userArray.length; i++) {
    
    const userName = userData.me.userName;
    const userEmail = userData.me.email;
    
    console.log(userEmail)


  return (
    <>
      <div class="card">
        <div class="card-image">
          <img src={profileImage} alt="profile pic" className="photo"></img>
          <div class="username"> User: </div>
          <div class="title"> {userName} </div>
        </div>
        <div class="card-content">
          <p>EMAIL:  </p>
          <p class="email"> {userEmail} </p>
        </div>
        <div class="card-action">
          <button>Join Chat</button>
        </div>
      </div>
    </>
  );
}
//*}
//^-------