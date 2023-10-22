import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: nanoid(),
    title: 'Testing Redux Toolkit',
    content: `I've heard good things and bad things...`,
    createdAt: 1697967657095,
  },
  {
    id: nanoid(),
    title: 'Slices...',
    content: `The more I say slice, the more I want pizza!`,
    createdAt: 1697967210000,
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
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            createdAt: Date.now(),
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
