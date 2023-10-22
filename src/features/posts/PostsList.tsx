import { useSelector } from 'react-redux';

import { post_type, selectAllPosts } from './postsSlice';
import PostCard from './PostCard';

export default function PostsList() {
  const sortedPosts = [...useSelector(selectAllPosts)].sort(
    (a: post_type, b: post_type) => b.createdAt - a.createdAt
  );

  return (
    <section>
      <h1 className='mb-4 text-3xl'>posts</h1>
      {sortedPosts.length > 0 ? (
        <div className='flex flex-col gap-4'>
          {sortedPosts.map((post: any) => (
            <PostCard
              title={post.title}
              content={post.content}
              authorId={post.userId}
              createdAt={post.createdAt}
              key={post.id}
            />
          ))}
        </div>
      ) : (
        <p className='text-gray-500 text-lg'>No posts yet.</p>
      )}
    </section>
  );
}
