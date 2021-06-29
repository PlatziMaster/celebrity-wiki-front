// Import libraries
import { useParams } from 'react-router-dom';
// Import components
import { Template } from './Template';
// Import custom hooks
import { useGetCelebrityById } from '../../customHooks/useGetCelebrityById';

export const Celebrity = () => {
  // Get location
  const params = useParams();
  // Get celebrity data from custom hook
  const { celebrity } = useGetCelebrityById(params.id);
  
  return (
    <Template celebrity={celebrity}/>
  )
}
