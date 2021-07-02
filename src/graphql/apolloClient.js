// Import apollo libraries
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink, from } from 'apollo-boost';
import { onError } from "apollo-link-error";

// Set uri from api
const httpLink = new HttpLink({ uri: 'https://people-new.herokuapp.com/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = window.localStorage.getItem('People-News-Token');

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? token : ''
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  // Check if the error is from graphQL
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  
  // Check if the error is from network error
  if (networkError) {
    if (networkError.statusCode === 401) {
      if (window.localStorage.getItem('Covid-Statistics-Token')) {    
        window.localStorage.removeItem('Covid-Statistics-Token');
        window.location.reload();
      }
    }
  };
});

export const client = new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache()
});