import { useSelector } from 'react-redux';

import { selectAllPosts } from './postsSlice';
import PostCard from './PostCard';

export default function PostsList() {
  const posts = useSelector(selectAllPosts);

  return (
    <section>
      <h1 className='mb-4 text-3xl'>posts</h1>
      {posts.length > 0 ? (
        <div className='flex flex-col gap-4'>
          {posts.map((post: any) => (
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
