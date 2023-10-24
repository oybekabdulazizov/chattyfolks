import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPost } from './postsSlice';
import { getUsers } from '../users/usersSlice';

const initialValue = {
  title: '',
  content: '',
  userId: '',
};

export default function AddPostForm() {
  const [formData, setFormData] = useState<{
    title: string;
    content: string;
    userId: string;
  }>({
    title: '',
    content: '',
    userId: '',
  });
  const [errors, setErrors] = useState<{
    title: string;
    content: string;
    userId: string;
  }>({
    title: '',
    content: '',
    userId: '',
  });

  const users = useSelector(getUsers);
  const dispatch = useDispatch();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setErrors((prev) => ({
      ...prev,
      [name]:
        value.length < 1
          ? `${name === 'userId' ? 'author' : name} is required`
          : '',
    }));

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, content, userId } = formData;
    if (title.length < 1 || content.length < 1 || userId.length < 1) {
      setErrors((prev) => ({
        ...prev,
        title: title.length < 1 ? 'title is required' : '',
        content: content.length < 1 ? 'content is required' : '',
        userId: userId.length < 1 ? 'author is required' : '',
      }));
    } else {
      dispatch(addPost(title, content, userId));

      setFormData(initialValue);

      setErrors(initialValue);
    }
  };

  return (
    <div className='max-w-96 py-4'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
          <div>
            <label htmlFor='userId' className='text-lg'>
              author
            </label>
            <span className='text-red-600 ml-1'>*</span>
          </div>
          <select
            name='userId'
            id='userId'
            onChange={handleChange}
            value={formData.userId}
            className='bg-zinc-800 py-2 px-3 rounded-md'
          >
            <option value='' className='bg-zinc-800'></option>
            {users.map((user: { id: string; name: string }) => (
              <option key={user.id} value={user.id} className='bg-zinc-800'>
                {user.name}
              </option>
            ))}
          </select>
          {errors && errors.userId && (
            <p className='text-md text-red-600 normal-case'>{errors.userId}</p>
          )}
        </div>
        <div className='flex flex-col gap-2'>
          <div>
            <label htmlFor='title' className='text-lg'>
              title
            </label>
            <span className='text-red-600 ml-1'>*</span>
          </div>
          <input
            type='text'
            name='title'
            id='title'
            value={formData.title}
            className='bg-zinc-800 py-2 px-3 rounded-md'
            onChange={handleChange}
          />
          {errors && errors.title && (
            <p className='text-md text-red-600 normal-case'>{errors.title}</p>
          )}
        </div>
        <div className='flex flex-col gap-2'>
          <div>
            <label htmlFor='content' className='text-lg'>
              content
            </label>
            <span className='text-red-600 ml-1'>*</span>
          </div>
          <textarea
            rows={4}
            name='content'
            id='content'
            value={formData.content}
            className='bg-zinc-800 py-2 px-3 rounded-md'
            onChange={handleChange}
          />
          {errors && errors.content && (
            <p className='text-md text-red-600 normal-case'>{errors.content}</p>
          )}
        </div>
        <button
          type='submit'
          //   disabled={formData.title.length < 1 || formData.content.length < 1}
          className='py-2 px-3 rounded-md bg-blue-800 disabled:bg-opacity-20'
        >
          post
        </button>
      </form>
    </div>
  );
}
