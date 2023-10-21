import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '../features/posts/postsSlice';

export const postsStore = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
