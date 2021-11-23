import React from "react";
// import { Navbar } from "react-materialize";
import Landing from "./pages/Landing";
// import { ApolloClient } from '@apollo/client';
import Profile from "./pages/Profile";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <div className="App">
      <Landing />
      <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route
            exact
            path="/profile"
            element={<Profile />}
          />
        </Routes>
    </div>
    </>
  );
}

export default App;
