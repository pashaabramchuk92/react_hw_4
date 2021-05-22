import { createContext, useContext, useEffect, useState } from 'react';

const BlogContext = createContext(null);

const BlogProvider = ({ children }) => {

  const [likedPosts, setLikedPosts] = useState([]);
  const [contextIsLike, setContextIsLike] = useState(false);

  useEffect(() => {
    const createArr = () => {
      const arr = [];
      const keys = Object.keys(localStorage);
  
      for (const key of keys) {
        arr.push({title: getLikedPost(key), id: key});
      }
      return arr;
    }
    setContextIsLike(true ? false : true);
    setLikedPosts(createArr());
  }, [contextIsLike]);

  const saveLikedPost = (id, title) => localStorage.setItem(id, title)

  const deleteLikedPost = (id) => {
    setLikedPosts(likedPosts.filter(post => id !== post.id));
    localStorage.removeItem(id);
  }

  const getLikedPost = (id) => localStorage.getItem(id);

  const contextValue = {
    likedPosts,
    contextIsLike,
    setContextIsLike,
    saveLikedPost,
    deleteLikedPost,
    getLikedPost,
    setLikedPosts
  }

  return (
    <BlogContext.Provider value={contextValue}>
      {children}
    </BlogContext.Provider>
  );
}

const useBlog = () => useContext(BlogContext);

export { BlogContext, BlogProvider, useBlog }