import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Testing Redux Toolkit',
    content: `I've heard good things and bad things...`,
  },
  {
    id: 2,
    title: 'Slices...',
    content: `The more I say slice, the more I want pizza!`,
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

export const selectAllPosts = (state: any) => state.posts;

export default postsSlice.reducer;
