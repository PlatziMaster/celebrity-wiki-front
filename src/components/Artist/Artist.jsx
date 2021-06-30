// Import libraries
import { useParams } from 'react-router-dom';
// Import components
import { Template } from './Template';
// Import custom hooks
import { useGetArtistById } from '../../customHooks/useGetArtistById';

export const Artist = () => {
  // Get location
  const params = useParams();
  // Get celebrity data from custom hook
  const { artist } = useGetArtistById(params.id);
  
  return (
    <Template artist={artist}/>
  )
}
