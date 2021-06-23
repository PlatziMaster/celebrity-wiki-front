// Import actions constant
import {
  START_LOGIN,
  SUCCESS_GOOGLE_LOGIN,
  ERROR_GOOGLE_LOGIN,
  RESPONSE_FACEBOOK_LOGIN,
  LOGOUT
} from '../consts';

/**
 * @function {Redux action}
 * @param {object} payload
 * @returns {object}
 *  @property {string} type - Action.
 *  @property {object} payload - Data sent from Redux action.
 */

export const login = payload => ({
  type: START_LOGIN,
  payload
});

export const successGoogleLogin = payload => ({
  type: SUCCESS_GOOGLE_LOGIN,
  payload
});

export const errorGoogleLogin = payload => ({
  type: ERROR_GOOGLE_LOGIN,
  payload
});

export const responseFacebookLogin = payload => ({
  type: RESPONSE_FACEBOOK_LOGIN,
  payload
});

export const logout = payload => ({
  type: LOGOUT,
  payload
});
