import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

export default function PostsList() {
  const posts = useSelector(selectAllPosts);
  const users: Array<any> = useSelector(selectAllUsers);

  return (
    <section>
      {posts.map((post: any) => (
        <div className='flex flex-col mb-6' key={post.id}>
          <h2>{post.title}:</h2>
          <p>{post.content}</p>
          <p>
            by{' '}
            {post.userId
              ? users.find((user) => user.id === post.userId).name
              : 'Unknown author'}
          </p>
        </div>
      ))}
    </section>
  );
}
