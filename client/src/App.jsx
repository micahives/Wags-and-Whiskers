import React, { useState } from 'react';
import {Outlet, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from '@apollo/client';
  import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
uri: '/graphql',
});

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
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  function App() {
    const hasToken = localStorage.getItem('id_token') !== null;

    return (
      <ApolloProvider client={client}>
      <div className="flex flex-col min-h-screen">
        {hasToken && <Header />}
        <main className="flex-grow container mx-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ApolloProvider>
  );
  }

export default App;