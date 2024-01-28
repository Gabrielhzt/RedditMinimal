// redditSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../api/reddit';

const API_ROOT = 'https://www.reddit.com';

const redditSlice = createSlice({
  name: 'reddit',
  initialState: {
    subreddits: [],
    loading: false,
  },
  reducers: {
    setSubreddits: (state, action) => {
      state.subreddits = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const getPopularSubreddits = async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const subredditList = await fetchData(`${API_ROOT}/subreddits/popular.json`);
    dispatch(setSubreddits(subredditList));
  } catch (error) {
    console.error('Error fetching popular subreddits:', error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const { setSubreddits, setLoading } = redditSlice.actions;

const redditReducer = redditSlice.reducer;

export default redditReducer;
