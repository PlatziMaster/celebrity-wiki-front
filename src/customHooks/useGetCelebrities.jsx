// Import libraries
import { useState, useEffect } from 'react';
import { useQuery } from "react-apollo";
// Import queries
import { GET_ALL_CELEBRITIES } from '../graphql/queries';

export const useGetCelebrities = () => {
  // State for celebrities list
  const [celebrities, setCelebrities] = useState([]);
  // Get data from graphQL query
  const { loading, error, data } = useQuery(GET_ALL_CELEBRITIES);

  // Set celebrities result in celebrities list
  useEffect(() => {
    if (data) {
      setCelebrities(data.getCelebrities);
    }
  }, [data]);

  // Return data
  return { celebrities, loading, error };
};