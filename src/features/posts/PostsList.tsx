import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';

export default function PostsList() {
  const posts = useSelector(selectAllPosts);
  return (
    <section>
      {posts.map((post: any) => (
        <div className='flex flex-col mb-6' key={post.id}>
          <h2>{post.title}:</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </section>
  );
}
