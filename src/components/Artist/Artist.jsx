// Import libraries
import { useParams } from 'react-router-dom';
// Import components
import { Template } from './Template';
import { Spinner }  from "../UI/Spinner/Spinner";
// Import custom hooks
import { useGetArtistById } from '../../customHooks/useGetArtistById';

export const Artist = () => {
  // Get location
  const params = useParams();
  // Get celebrity data from custom hook
  const { artist, loading } = useGetArtistById(params.id);

  if (loading) {
    return (
      <div className="container-spinner">
        <Spinner classStyle="spinner-orange"/>
      </div>
    )
  }
  
  return (
    Object.keys(artist).length > 0 && <Template artist={artist}/>
  )
}
