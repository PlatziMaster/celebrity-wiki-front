// Import libraries
import { useState, useEffect } from 'react';
import { useQuery } from "react-apollo";
// Import queries
import { GET_ALL_ARTISTS } from '../graphql/queries';

export const useGetArtists = () => {
  // State for artists list
  const [artists, setArtists] = useState([]);
  // Get data from graphQL query
  const { loading, error, data } = useQuery(GET_ALL_ARTISTS);

  // Set artists result in artists list
  useEffect(() => {
    if (data) {
      setArtists(data.getArtists.map(artist => ({ ...artist, name: artist.Artist_name })));
    }
  }, [data]);

  // Return data
  return { artists, loading, error };
};