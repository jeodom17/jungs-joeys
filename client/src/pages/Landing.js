import React from "react";
import Land from "../components/Land";
import Footer from "../components/Footer";
import Nav from "../components/Nav"
import SideNav from "../components/ProfileCard";

export default function Landing() {
    return (
      <div>
        <Nav />

        <SideNav />
        
        <Land/>

        <Footer />
      </div>
    );
  }

  