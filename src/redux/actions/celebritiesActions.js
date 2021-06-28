// Import actions constant
import {
  SET_CELEBRITIES,
  SET_FILTER_CELEBRITIES
} from '../consts';

/**
 * @function {Redux action}
 * @param {object} payload
 * @returns {object}
 *  @property {string} type - Action.
 *  @property {object} payload - Data sent from Redux action.
 */

export const setCelebrities = payload => ({
  type: SET_CELEBRITIES,
  payload
});

export const setFilterCelebrities = payload => ({
  type: SET_FILTER_CELEBRITIES,
  payload
});
