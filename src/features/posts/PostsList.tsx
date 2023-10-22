import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';
import { calculateRelativeTimes } from '../../utils';

export default function PostsList() {
  const posts = useSelector(selectAllPosts);
  const users: Array<any> = useSelector(selectAllUsers);

  return (
    <section>
      {posts.map((post: any) => (
        <div className='flex flex-col mb-6' key={post.id}>
          <h2>{post.title}:</h2>
          <p>{post.content}</p>
          <div>
            <p className='inline-block'>
              by{' '}
              {post.userId
                ? users.find((user) => user.id === post.userId).name
                : 'Unknown author'}
            </p>
            <span className='text-slate-400 text-sm ml-4'>
              {calculateRelativeTimes(post.createdAt)}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
