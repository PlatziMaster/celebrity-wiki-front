// Import libraries
import { useState, useEffect } from 'react';
import { useQuery } from "react-apollo";
// Import queries
import { GET_CELEBRITY_BY_ID } from '../graphql/queries';

export const useGetCelebrityById = (id) => {
  // State for celebrity data
  const [celebrity, setCelebrity] = useState({});
  // Get data from graphQL query
  const { loading, error, data } = useQuery(GET_CELEBRITY_BY_ID, {
    variables: { id },
  });

  // Set celebrity result in celebrity data
  useEffect(() => {
    if (data) {
      setCelebrity(data.getCelebritie);
    }
  }, [data]);

  // Return data
  return { celebrity, loading, error };
};