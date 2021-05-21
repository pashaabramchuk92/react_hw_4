import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { useState, useEffect } from 'react';

import { getData, getTotalCount, getMoreData, getPageData } from "./api/api";
import useDebounce from './hooks/useDebounce';
import MainPage from "./containers/MainPage";
import PostPage from "./containers/PostPage";

const history = createBrowserHistory();

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
      const data = await getData(BASE_URL, page, limit, order, debouncedValue);
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

  const args = {
    posts,
    page,
    limit,
    order,
    query,
    total,
    isSearching,
    viewGrid,
    next,
    isLoading,
    setPosts,
    setPage,
    setLimit,
    setOrder,
    setQuery,
    setTotal,
    setIsSearching,
    setViewGrid,
    setNext,
    setIsLoding,
    handleToggleView,
    handleLoadMore,
    getPageData,
  }

  return (
    <Router history= {history}>
      <Switch>
        <Route
          path='/'
          exact
          render={() => (
            <MainPage args={args} />
          )}
        />
        <Route
          path='/post'
          render={() => <PostPage args={args} />}
        />
      </Switch>
    </Router>
  )
}

export default App;
