// Import apollo libraries
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';

// Set uri from api
const httpLink = new HttpLink({ uri: 'http://uri' });

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

export const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
});