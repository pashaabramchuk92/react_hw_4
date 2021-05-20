import { createContext, useContext, useEffect, useState } from 'react';

const BlogContext = createContext(null);

const BlogProvider = ({ children }) => {
  const [isLike, setIsLike] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);
  const [color, setColor] = useState('');

  useEffect(() => {
    const createArr = () => {
      const arr = [];
      const keys = Object.keys(localStorage);
  
      for (const key of keys) {
        arr.push({title: getLikedPost(key), id: key});
      }
      return arr;
    }
    setIsLike(true ? false : true);
    setColor(isLike ? 'blue' : '');
    setLikedPosts(createArr());
  }, [isLike]);

  const saveLikedPost = (id, title) => {localStorage.setItem(id, title); setIsLike(true)};

  const deleteLikedPost = (id) => {
    setLikedPosts(likedPosts.filter(post => id !== post.id));
    localStorage.removeItem(id);
  }

  const getLikedPost = (id) => localStorage.getItem(id);

  const contextValue = {
    likedPosts,
    isLike,
    color,
    setIsLike,
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