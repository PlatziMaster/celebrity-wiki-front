// Import const
import {
  LOGOUT 
} from '../consts';

export const logout = payload => ({
  type: LOGOUT,
  payload
});