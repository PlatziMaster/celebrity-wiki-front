// Import actions constant
import {
  SET_CELEBRITIES
} from '../consts';

/** 
 * @constant - Initial state for Redux store.
 * @type {object} 
 */
const initialState = {
  celebrities: []
};

/**
 * @function authReducer
 * @param {object} state
 * @param {object} action
 *  @property {string} type - Action.
 *  @property {object} payload - Data sent from Redux action.
 * @returns {object} - New state
 */
export const celebritiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CELEBRITIES:
      /**
       * @returns {object} - Set new celebrity list
       */
      return { 
        ...state,
        celebrities: action.payload
      };
    default:
      return { ...state };
  }
}
