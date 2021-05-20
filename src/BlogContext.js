import { createContext, useContext, useEffect, useState } from 'react';

const BlogContext = createContext(null);

const BlogProvider = ({ children }) => {

  const [likedPosts, setLikedPosts] = useState([]);
  const [isLike, setIsLike] = useState(false);
  
  const saveLikedPost = (id, post) => localStorage.setItem(id, post);
  // const deleteLikePost = (id) => {
  //   setLikedPosts(likedPosts.filter(post => id !== post.id));
  //   localStorage.removeItem(id);
  // };
  // const getLikedPosts = (id) => localStorage.getItem(id);


  const contextValue = {
    likedPosts,
    isLike,
    saveLikedPost
  }

  return (
    <BlogContext.Provider value={contextValue}>
      {children}
    </BlogContext.Provider>
  );
}

const useBlog = () => useContext(BlogContext);

export { BlogContext, BlogProvider, useBlog }