import { useSelector } from 'react-redux';

import { selectAllUsers } from '../users/usersSlice';
import { calculateRelativeTimes } from '../../utils';
import userPlaceholder from '../../assets/user-placeholder.jpg';

type Props = {
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
};

export default function PostCard({
  title,
  content,
  authorId,
  createdAt,
}: Props) {
  const users = useSelector(selectAllUsers);

  return (
    <div className='w-full bg-zinc-800 py-4 px-5 rounded-md flex flex-1 flex-row gap-3'>
      <div className='w-12'>
        <img src={userPlaceholder} className='rounded-full w-10 h-10' />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <div className='flex flex-row gap-2 items-center mt-1'>
          <p>
            {authorId
              ? users.find((user: any) => user.id === authorId).name
              : 'unknown author'}
          </p>
          <span className='text-slate-400 text-sm'>
            {calculateRelativeTimes(createdAt)}
          </span>
        </div>
        <div className=''>
          <h2 className='w-full'>{title}:</h2>
          <p className=''>{content}</p>
        </div>
      </div>
    </div>
  );
}
