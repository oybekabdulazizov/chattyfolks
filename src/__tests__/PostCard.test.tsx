import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { postsStore } from '../store/postsStore';
import PostCard from '../features/posts/PostCard';

describe('testing PostCard.tsx', () => {
  test('renders a post card', () => {
    render(
      <Provider store={postsStore}>
        <PostCard postId={'XgdD1BcCS3LnZdTzxWKK5'} />
      </Provider>
    );
    screen.debug();
  });
});
