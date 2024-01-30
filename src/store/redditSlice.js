// redditSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../api/reddit';

const API_ROOT = 'https://www.reddit.com';

export const getPopularSubreddits = createAsyncThunk('reddit/getPopularSubreddits', async () => {
  try {
    const subredditList = await fetchData(`${API_ROOT}/subreddits/popular.json`);
    return subredditList.slice();
  } catch (error) {
    throw error;
  }
});

const redditSlice = createSlice({
  name: 'reddit',
  initialState: {
    subreddits: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularSubreddits.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPopularSubreddits.fulfilled, (state, action) => {
        state.loading = false;
        state.subreddits = action.payload;
      })
      .addCase(getPopularSubreddits.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectSubreddits = (state) => state.reddit.subreddits;
export const selectLoading = (state) => state.reddit.loading;
export const selectError = (state) => state.reddit.error;

const redditReducer = redditSlice.reducer;
export default redditReducer;
