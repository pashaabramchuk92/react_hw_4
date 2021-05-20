import { BlogProvider } from '../BlogContext';
import NavBar from "../components/NavBar";
import PostsGridView from "../components/PostsGridView";
import PostsListView from "../components/PostsListView";
import LoadMore from "../components/LoadMore";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const MainPage = ({ args }) => {
  return (
    <BlogProvider>
      <div className="uk-main">
        <Header posts={args.posts} />
        <div className="uk-section">
          <div className="uk-container">
            <NavBar
              setIsSearching={args.setIsSearching}
              isSearching={args.isSearching}
              setQuery={args.setQuery}
              setOrder={args.setOrder}
              setLimit={args.setLimit}
              viewGrid={args.viewGrid}
              handleToggleView={args.handleToggleView}
            />
            {
              args.viewGrid ? 
              <PostsGridView posts={args.posts} getPageData={args.getPageData} url={args.BASE_URL} /> : 
              <PostsListView posts={args.posts} />
            }
            <LoadMore
              handleLoadMore={args.handleLoadMore}
              isLoading={args.isLoading}
              setIsLoding={args.setIsLoding}
            />
            <Pagination
              total={args.total}
              limit={args.limit}
              page={args.page}
              setPage={args.setPage}
            />
          </div>
        </div>
      </div>
    </BlogProvider>
  );
}

export default MainPage;