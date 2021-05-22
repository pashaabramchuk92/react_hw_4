import SearchBar from './SearchBar';
import SortPosts from './SortPosts';
import ShowPosts from './ShowPosts';
import ChangeView from './ChangeView';

const NavBar = ({
  setIsSearching,
  isSearching,
  setQuery,
  setOrder,
  setLimit,
  viewGrid,
  viewList,
  setViewGrid,
  setViewList,
}) => {
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <SearchBar
        setIsSearching={setIsSearching}
        isSearching={isSearching}
        setQuery={setQuery}
      />
      <SortPosts setOrder={setOrder} />
      <ShowPosts setLimit={setLimit} />
      <ChangeView
        viewGrid={viewGrid}
        viewList={viewList}
        setViewGrid={setViewGrid}
        setViewList={setViewList}
      />
    </div>
  )
}

export default NavBar;