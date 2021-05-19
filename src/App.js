import { BlogProvider } from './BlogContext';

import Posts from './components/posts';

const App = () => {
  return (
    <BlogProvider>
      <div className="App">
        app
        <Posts />
      </div>
    </BlogProvider>
  );
}

export default App;
