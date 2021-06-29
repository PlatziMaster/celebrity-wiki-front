// Import libraries
import { useState, useEffect } from 'react';
import { useQuery } from "react-apollo";
// Import queries
import { GET_ARTIST_BY_ID } from '../graphql/queries';

export const useGetArtistById = (id) => {
  // State for artist data
  const [artist, setArtist] = useState({});
  // Get data from graphQL query
  const { loading, error, data } = useQuery(GET_ARTIST_BY_ID, {
    variables: { id },
  });

  // Set artist result in artist data
  useEffect(() => {
    if (data) {
      setArtist(data.getArtist);
    }
  }, [data]);

  // Return data
  return { artist, loading, error };
};