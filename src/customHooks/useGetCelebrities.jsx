// Import libraries
import { useState, useEffect } from 'react';
import { useQuery } from "react-apollo";
// Import queries
import { GET_ALL_CELEBRITIES } from '../graphql/queries';

export const useGetCelebrities = () => {
  // State for celebrities list
  const [celebrities, setCelebrities] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  // Get data from graphQL query
  const { error, data } = useQuery(GET_ALL_CELEBRITIES);

  // Set celebrities result in celebrities list
  useEffect(() => {

    async function loadData(){
      if (data) {
        setIsLoaded(true);
        await setCelebrities(data.getCelebrities);
      }
    }

    loadData();
    
  }, [data]);

  // Return data
  return { celebrities, isLoaded, error };
};