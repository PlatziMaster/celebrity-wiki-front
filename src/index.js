// Import react libraries
import React from 'react';
import ReactDOM from 'react-dom';
// Import provider component from react redux
import { Provider } from 'react-redux';
// Import provider component from react apollo
import { ApolloProvider } from "react-apollo";
// Import routes component
import { Routes } from './routes/index';
// Import styles to all app
import './styles/styles.scss';
// Import apollo client
import { client } from './graphql/apolloClient';
// Import store
import { storeFn } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={storeFn()}>
        <Routes />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
