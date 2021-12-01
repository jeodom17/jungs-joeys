import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Forum from "./pages/Forum";
import Topic from "./pages/Topic";
import Account from "./pages/Account";
import Chat from "./pages/Chat";

import "./App.css";

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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