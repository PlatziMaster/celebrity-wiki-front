// Import combine reducers library
import { combineReducers } from 'redux';

// Import reducers
import { authReducer } from './authReducer';
import { celebritiesReducer } from './celebritiesReducer';

// Combine reducers
export const rootReducer = combineReducers({
	authReducer,
	celebritiesReducer
});
