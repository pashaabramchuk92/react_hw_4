import { useEffect, useState } from "react";
import useDebounce from './hooks/useDebounce';
import { BlogProvider } from './BlogContext';

import { getData, getTotalCount, getMoreData } from "./api/api";
import NavBar from "./components/NavBar";
import PostsGridView from "./components/PostsGridView";
import PostsListView from "./components/PostsListView";
import LoadMore from "./components/LoadMore";
import Header from "./components/Header";

const App = () => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [order, setOrder] = useState('asc');
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [viewGrid, setViewGrid] = useState(true);
  const [next, setNext] = useState(0);
  const [isLoading, setIsLoding] = useState(false);

  const debouncedValue = useDebounce(query, 500);

  useEffect(() => {
    const fetchTotal = async () => {
      const totalCount = await getTotalCount(BASE_URL, page);
      setTotal(totalCount);
    };
    fetchTotal();
  }, [total, page]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getData(BASE_URL, page, limit, order, query);
      setPosts(data);
      setIsSearching(false);
    }
    fetchPosts();
  }, [debouncedValue, page, limit, order]);

  useEffect(() => {
    const fetchMorePosts = async () => {
      const morePosts = await getMoreData(BASE_URL, 0, next + limit, order);
      setPosts(morePosts);
      setIsLoding(false);
    }
    fetchMorePosts();
  }, [next, limit, order]);

  const handleToggleView = () => setViewGrid(!viewGrid);

  const handleLoadMore = () => {
    setQuery('');
    setNext(next + Number(limit));
  }

  return (
    <BlogProvider>
      <div className="uk-main">
        <Header posts={posts} />
        <div className="uk-section">
          <div className="uk-container">
            <NavBar
              setIsSearching={setIsSearching}
              isSearching={isSearching}
              setQuery={setQuery}
              setOrder={setOrder}
              setLimit={setLimit}
              viewGrid={viewGrid}
              handleToggleView={handleToggleView}
            />
            {
              viewGrid ? 
              <PostsGridView posts={posts} /> : 
              <PostsListView posts={posts} />
            }
            <LoadMore
              handleLoadMore={handleLoadMore}
              isLoading={isLoading}
              setIsLoding={setIsLoding}
            />
          </div>
        </div>
      </div>
    </BlogProvider>
  );
}

export default App;
