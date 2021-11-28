import React from "react";
// import { Navbar } from "react-materialize";
import Landing from "./pages/Landing";
// import { ApolloClient } from '@apollo/client';
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Forum from "./pages/Forum";
import Topic from "./pages/Topic";
import Signup from "./pages/Signup";
import SignUpForm from "./components/Signup";
import SignInForm from "./components/Login";

import "./App.css";


function App() {
  return (
    <>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/forum" element={<Forum />} />
            <Route exact path="/topic" element={<Topic />} />
            <Route exact path="/account" element={<Signup />} />
            <Route exact path="/signup" element={<SignUpForm/>} />
            <Route path="/login" element={<SignInForm/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
