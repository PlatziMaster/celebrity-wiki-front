// Import actions constant
import {
  START_LOGIN, 
  SUCCESS_LOGIN, 
  ERROR_LOGIN,
  SUCCESS_GOOGLE_LOGIN,
  ERROR_GOOGLE_LOGIN,
  RESPONSE_FACEBOOK_LOGIN,
  LOGOUT
} from '../consts';

/** 
 * @constant - Initial state for Redux store.
 * @type {object} 
 */
const initialState = {
  successRequest: false,
  errorRequest: false,
  messageError: '',
  // Get token from local storage
  token: window.localStorage.getItem('People-News-Token')
};

/**
 * @function authReducer
 * @param {object} state
 * @param {object} action
 *  @property {string} type - Action.
 *  @property {object} payload - Data sent from Redux action.
 * @returns {object} - New state
 */
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN:
      /**
       * @returns {object} - Reset state of success and error request
       */
      return { 
        ...state,
        successRequest: false,
        errorRequest: false,
      };
    case SUCCESS_LOGIN:
      /** 
       * @constant - Token got in login request.
       * @type {string} 
       */
      const { token: tokenLogin } = action.result;

      // Set token in local storage
      window.localStorage.setItem('People-News-Token', `Bearer ${tokenLogin}`);

      /**
       * @returns {object} - Set success request true and set new token
       */
      return { 
        ...state, 
        successRequest: true,
        token: `Bearer ${tokenLogin}`
      };
    case ERROR_LOGIN:
      console.log(action.error);
      /**
       * @returns {object} - Set error request true and set message error
       */
      return { 
        ...state, 
        errorRequest: true,
        messageError: action.error.message 
      };
    case SUCCESS_GOOGLE_LOGIN:
      /** 
       * @constant - Token got in Google login request.
       * @type {string} 
       */
      const { tokenId: tokenIdGoogle  } = action.payload;

      // Set token in local storage
      window.localStorage.setItem('People-News-Token', `Bearer ${tokenIdGoogle}`);

      /**
       * @returns {object} - Set success request true and set new token
       */
      return { 
        ...state, 
        successRequest: true,
        token: tokenIdGoogle
      };
    case ERROR_GOOGLE_LOGIN:
      /**
       * @returns {object} - Set error request true and set message error
       */
      return { 
        ...state, 
        errorRequest: true,
        messageError: 'Login with Google failed'
      };
    case RESPONSE_FACEBOOK_LOGIN:
      /** 
       * @constant - Token got in Facebook login request.
       * @type {string} 
       */
      const { accessToken: accessTokenFacebook } = action.payload;

      // Chesk if the facebook response has the access token
      if (accessTokenFacebook) {
        // Set token in local storage
        window.localStorage.setItem('People-News-Token', accessTokenFacebook);
        
        /**
         * @returns {object} - Set success request true and set new token
         */
        return { 
          ...state,
          successRequest: true,
          token: accessTokenFacebook
        };
      } else {
        /**
         * @returns {object} - Set error request true and set message error
         */
        return { 
          ...state,
          errorRequest: true,
          messageError: 'Login with Facebook failed' 
        };
      }
    case LOGOUT:
      // Remove token from local storage
      window.localStorage.removeItem('People-News-Token');

      /**
       * @returns {object} - Set token null
       */
      return { 
        ...state,
        token: null
      };
    default:
      return { ...state };
  }
}
