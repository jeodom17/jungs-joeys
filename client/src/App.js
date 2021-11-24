import React from "react";
// import { Navbar } from "react-materialize";
import Landing from "./pages/Landing";
import { ApolloClient } from '@apollo/client';
import Profile from "./pages/Profile";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"


function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/profile"
            element={<Profile />}
          />
        </Routes>
    </div>
    </>
  );
}

export default App;
