// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import redditReducer from './redditSlice';

const rootReducer = combineReducers({
  reddit: redditReducer,
});

export default rootReducer;

