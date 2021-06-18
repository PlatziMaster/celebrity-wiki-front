// Import logos
import FacebookLogo from '../../../../assets/svgs/facebook.svg';

export const FacebookButton = () => (
  <button 
    className="login__button" 
    type="button"
  >
    <img src={FacebookLogo} alt="Facebook logo" />
  </button>
);
