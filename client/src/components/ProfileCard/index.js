import React from "react";
import { Link } from "react-router-dom";
// import { Sidenav } from "materialize-css";
import profileImage from "../../assets/image.png";
import "./style.css";

import { useSearchParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries"


    


export default function SideNav() {

  

  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={profileImage} alt="profile pic" className="photo"></img>
          <div class="username"> User:{} </div>
          <div class="title"> {} </div>
        </div>
        <div class="card-content">
          <p>EMAIL:  </p>
          <p class="email"> userEmail </p>
        </div>
        <div className="card-action">
          <button>Join Chat</button>
        </div>
      </div>
    </>
  );
}
