import { createContext, useContext, useEffect, useState } from 'react';
import { getData } from './api/api';

const BlogContext = createContext(null);

const BlogProvider = ({ children }) => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getData(BASE_URL);
      setPosts(data);
    }
    fetchPosts();
  }, []);


  const contextValue = {
    posts,
  }

  return (
    <BlogContext.Provider value={contextValue}>
      {children}
    </BlogContext.Provider>
  );
}

const useBlog = () => useContext(BlogContext);

export { BlogContext, BlogProvider, useBlog }