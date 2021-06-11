// Import const
import {
  LOGOUT
} from '../consts';

// Initialize state
const initialState = {
  successRequest: false,
  errorRequest: false,
  messageError: '',
  // Get token from local storage
  token: window.localStorage.getItem('People-News-Token')
};

// Create reducer
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      // Remove token from local storage
      window.localStorage.removeItem('People-News-Token');
      return { 
        ...state,
        token: null
      };
    default:
      return { ...state };
  }
}
