import React from "react";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Forum from "./pages/Forum";
import Topic from "./pages/Topic";
import Account from "./pages/Account";

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
            <Route exact path="/account" element={<Account />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
