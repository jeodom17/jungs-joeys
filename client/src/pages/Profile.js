import React from "react";
import SideNav from "../components/ProfileCard";
import Question from "../components/Question";
import TopRated from "../components/TopRated";


export default function Profile() {
    return (

        <div>
        <SideNav />
        
        <Question />

        <TopRated />
      </div>

    );
 }