import React from "react";
import SideNav from "../components/ProfileCard";
import Question from "../components/Question";
import TopRated from "../components/TopRated";
import "./styles/profile.css"


export default function Profile() {
    return (
    <div className="wrapper">
      <div className="side">
        <SideNav />
      </div>
      <div className="question">
        <Question />
      </div>
      <div className="top">
        <TopRated />
      </div>
    </div>
      

    );
 }