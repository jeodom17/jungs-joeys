import React from "react";
// import { Navbar } from "react-materialize";
// import Landing from "./pages/Landing";
// import { ApolloClient } from '@apollo/client';
import Profile from "./pages/Profile";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Land from "./components/Land";


function App() {
  return (
    <>
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Land/>} />
          <Route exact path="/profile"
            element={<Profile />}
          />
        </Routes>
      </main>
        <Footer />
    </div>
    </>
  );
}

export default App;
