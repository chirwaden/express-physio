import { combineReducers } from 'redux';  
import { reducer as formReducer } from 'redux-form';  
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({  
  auth: authReducer,
  form: formReducer,
  user: userReducer
});

export default rootReducer;  