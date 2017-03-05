import {combineReducers} from 'redux';  
import details from './detailReducer';  
import session from './sessionReducer';

const rootReducer = combineReducers({  
  details,
  session
})

export default rootReducer; 