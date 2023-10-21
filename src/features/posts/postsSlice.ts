import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: nanoid(),
    title: 'Testing Redux Toolkit',
    content: `I've heard good things and bad things...`,
  },
  {
    id: nanoid(),
    title: 'Slices...',
    content: `The more I say slice, the more I want pizza!`,
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
          meta: null,
          error: null,
        };
      },
    },
  },
});

export const { addPost } = postsSlice.actions;

export const selectAllPosts = (state: any) => state.posts;

export default postsSlice.reducer;
