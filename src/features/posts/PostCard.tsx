import { useSelector } from 'react-redux';

import { getUserById } from '../users/usersSlice';
import { calculateRelativeTimes } from '../../utils';
import userPlaceholder from '../../assets/user-placeholder.jpg';
import { getPostById } from './postsSlice';

type Props = {
  postId: string;
};

export default function PostCard({ postId }: Props) {
  const post = useSelector((state) => getPostById(state, postId));
  const author = useSelector((state) => getUserById(state, post.userId));

  return (
    <div className='w-full bg-zinc-800 py-4 px-5 rounded-md flex flex-1 flex-row gap-3'>
      <div className='w-12'>
        <img src={userPlaceholder} className='rounded-full w-10 h-10' />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <div className='flex flex-row gap-2 items-center mt-1'>
          <p>{author ? author.name : 'unknown author'}</p>
          <span className='text-slate-400 text-sm'>
            {calculateRelativeTimes(post.createdAt)}
          </span>
        </div>
        <div className=''>
          <h2 className='w-full'>{post.title}:</h2>
          <p className=''>{post.content}</p>
        </div>
      </div>
    </div>
  );
}
