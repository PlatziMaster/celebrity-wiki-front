// Import libraries
import { put, call, takeLatest } from 'redux-saga/effects';

// Import actions constant
import { 
  START_LOGIN, 
  SUCCESS_LOGIN, 
  ERROR_LOGIN,
} from '../../redux/consts';

// Import fetch API function
import apiCall from '../api';

/** 
 * @constant - Base url from api.
 * @type {string} 
 */
const baseURL = `https://url`;

/**
 * @function {request funcion}
 * @param {object} payload
 * Do fetch request and handle response
 */

export function * loginRequest({ payload }) {
  /** 
   * @constant - Data for login request.
   * @type {object}
   *  @property {string} email 
   *  @property {string} password 
   */
  const { data } = payload;
  
  // Handle request
  try {
    /** 
     * @constant - Fetch request with call function call(fetch function, url, HTTP method, data parsed with json stringify).
     * @type {promise} 
     */
    const result = yield call(apiCall, `${baseURL}/login`, 'POST', JSON.stringify(data));
    
    // Do success redux action
    yield put({ type: SUCCESS_LOGIN, result });
  } catch(error) {
    // Do error redux action
    yield put({ type: ERROR_LOGIN, error });
  }
}

// Create watchers
export default function * authSaga() {
  // Add requests actions
  yield takeLatest(START_LOGIN, loginRequest);
}