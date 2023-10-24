import { createSlice, nanoid } from '@reduxjs/toolkit';

export type post_type = {
  id: string;
  title: string;
  content: string;
  userId?: string;
  createdAt: number;
};

const initialState: Array<post_type> = [
  {
    id: 'XgdD1BcCS3LnZdTzxWKK5',
    title: 'Testing Redux Toolkit',
    content: `I've heard good things and bad things...`,
    createdAt: 1697967657095,
  },
  {
    id: 'oARhIlca88npwOFm2o0eX',
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
    deletePost: {
      reducer(state, { payload }) {
        return state.filter((post) => post.id !== payload.postId);
      },
      prepare(postId) {
        return {
          payload: {
            postId,
          },
          meta: null,
          error: null,
        };
      },
    },
  },
});

export const { addPost, deletePost } = postsSlice.actions;

export const getPosts = (state: any) => state.posts;

export const getPostById = (state: any, postId: string) => {
  return state.posts.find((post: post_type) => post.id === postId);
};

export default postsSlice.reducer;
