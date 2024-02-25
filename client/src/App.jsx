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
    return (
      <ApolloProvider client={client}>
        <div className="bg-red-500 flex-column justify-flex-start min-100-vh">
          <div className="h-15 bg-blue-400 absolute top-0 left-0 right-0 text-center">
            <Header />
          </div>
          <div className="container w-full">
            <Outlet />
          </div>
        <div className="bg-red-400 absolute bottom-0 left-0 right-0 text-center">
          <Footer />
        </div> 
        </div>
      </ApolloProvider>
    );
  }


// function App() {
    
//     return (
//         <>
//                 <Outlet />
//         </>
//     )
// }

export default App;