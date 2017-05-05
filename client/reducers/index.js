import { combineReducers } from 'redux';  
import { reducer as formReducer } from 'redux-form';  
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({  
  auth: authReducer,
  form: formReducer,
  users: usersReducer,
  user: userReducer
});

export default rootReducer;  