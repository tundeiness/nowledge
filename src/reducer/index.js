import { combineReducers } from 'redux';
import quiz from './quiz';
import titles from './titles'

const rootReducer = combineReducers({
  quiz,
  titles,
});

export default rootReducer;
