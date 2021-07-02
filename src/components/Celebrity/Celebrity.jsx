// Import libraries
import { useParams } from 'react-router-dom';
// Import components
import { Template } from './Template';
import { Spinner }  from "../UI/Spinner/Spinner";
// Import custom hooks
import { useGetCelebrityById } from '../../customHooks/useGetCelebrityById';

export const Celebrity = () => {
  // Get location
  const params = useParams();
  // Get celebrity data from custom hook
  const { celebrity, loading } = useGetCelebrityById(params.id);
  
  if (loading) {
    return (
      <div className="container-spinner">
        <Spinner classStyle="spinner-orange"/>
      </div>
    )
  }

  return (
    Object.keys(celebrity).length > 0 && <Template celebrity={celebrity}/>
  )
}
