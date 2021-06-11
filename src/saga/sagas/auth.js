// // Import libraries
// import { put, call, takeLatest } from 'redux-saga/effects';

// // Import const
// import { 
//   START_LOGIN, 
//   SUCCESS_LOGIN, 
//   ERROR_LOGIN,
// } from '../../redux/consts';

// // Import fetch API function
// import apiCall from '../api';

// // BaseURL
// const baseURL = `https://url`;

// // Create request action
// export function * loginRequest({ payload }) {
//   // Get payload data
//   const { data } = payload;
  
//   // Create request
//   try {
//     // fetch request with call function call(fetch function, url, HTTP method, data parsed with json stringify)
//     const result = yield call(apiCall, `${baseURL}/login`, 'POST', JSON.stringify(data));
//     // Do success redux action
//     yield put({ type: SUCCESS_LOGIN, result });
//   } catch(error) {
//     // Do error redux action
//     yield put({ type: ERROR_LOGIN, error });
//   }
// }

// // Create watchers
// export default function * authSaga() {
//   // Add requests actions
//   yield takeLatest(START_LOGIN, loginRequest);
// }