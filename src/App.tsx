import './App.css';
import PostsList from './features/posts/PostsList';

function App() {
  return (
    <div className='max-w-[600px] lg:mx-auto mx-6 flex flex-col gap-8 py-6 text-start'>
      <h1 className='text-4xl block'>ChattyFolks</h1>
      <PostsList />
    </div>
  );
}

export default App;
