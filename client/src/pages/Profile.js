import React from "react";
import SideNav from "../components/ProfileCard";
import Question from "../components/Question";
import TopRated from "../components/TopRated";
import "./styles/profile.css"


export default function Profile() {
    return (
    <div className="layout">
      <div className="side">
        <SideNav />
      </div>
      <div className="posts">
        <Question />
     
        <TopRated />
      </div>
    </div>
      

    );
 }