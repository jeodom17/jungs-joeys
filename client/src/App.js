import React from "react";
// import { Navbar } from "react-materialize";
import Landing from "./pages/Landing";
// import { ApolloClient } from '@apollo/client';
import Profile from "./pages/Profile";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Forum from "./pages/Forum";


function App() {
  return (
    <>
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/forum" element={<Forum/>} />
        </Routes>
      </main>
        <Footer />
    </div>
    </>
  );
}

export default App;
