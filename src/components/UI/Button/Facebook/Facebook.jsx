// Import libraries
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// Import logos
import FacebookLogo from '../../../../assets/svgs/facebook.svg';
// Import actions
import { responseFacebookLogin } from '../../../../redux/actions/authActions';

export const Component = ({ responseFacebookLogin }) => (
  <FacebookLogin
    // App id from app created in Facebook Developers
    appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
    // Data that we want to get from Facebook profile
    fields="name,email"
    // Function that will handle the Facebook response
    callback={responseFacebookLogin}
    // Render custom button
    render={({ onClick }) => (
      <button 
        className="login__button" 
        type="button"
        onClick={onClick}
      >
        <img src={FacebookLogo} alt="Facebook logo" />
      </button>
    )}
  />
);

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = dispatch => ({
  responseFacebookLogin(data) {
    dispatch(responseFacebookLogin(data))
  }
});

export const FacebookButton = connect(null, mapDispatchToProps)(Component);