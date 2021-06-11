// Import combine reducers library
import { combineReducers } from 'redux';

// Import reducers
import { authReducer } from './authReducer';

// Combine reducers
export const rootReducer = combineReducers({
	authReducer
});
