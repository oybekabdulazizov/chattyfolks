import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';

import './App.css';

function App() {
  return (
    <div className='max-w-[600px] lg:mx-auto mx-6 flex flex-col gap-6 py-6 text-start'>
      <h1 className='text-4xl block'>ChattyFolks</h1>
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
