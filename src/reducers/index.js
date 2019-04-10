import { combineReducers } from 'redux';
import feed from './feed';
import logged from './logged';
import popup from './popup';

const rootReducer = combineReducers({
  feed,
  logged,
  popup,
});

export default rootReducer;
