import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Forum from "./pages/Forum";
import Topic from "./pages/Topic";
import Account from "./pages/Account";
import Chat from "./pages/Chat";

import "./App.css";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
            <Router>

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
            <Route exact path="/chat" element={<Chat />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </Router>

      </ApolloProvider>
  );
}

export default App;
