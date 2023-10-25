import '@testing-library/jest-dom';
import AddPostForm from '../features/posts/AddPostForm';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { postsStore } from '../store/postsStore';

describe('testing App.js', () => {
  test('renders add post form', () => {
    expect(true).toBe(true);

    render(
      <Provider store={postsStore}>
        <AddPostForm />
      </Provider>
    );
    expect(true).toBeTruthy();
  });
});
