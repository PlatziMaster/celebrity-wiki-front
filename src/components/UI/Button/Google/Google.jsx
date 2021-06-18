// Import logos
import GoogleLogo from '../../../../assets/svgs/google.svg';

export const GoogleButton = () => (
  <button 
    className="login__button" 
    type="button"
  >
    <img src={GoogleLogo} alt="Google logo" />
  </button>
);
