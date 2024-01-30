// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import redditReducer from './redditSlice';
import counterReducer from './counterSlice';

const rootReducer = combineReducers({
  reddit: redditReducer,
  counter: counterReducer,
});

export default rootReducer;

