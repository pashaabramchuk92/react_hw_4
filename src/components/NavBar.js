import SearchBar from './SearchBar';
import SortPosts from './SortPosts';
import ShowPosts from './ShowPosts';
import ToggleView from './ToggleView';

const NavBar = ({
  setIsSearching,
  isSearching,
  setQuery,
  setOrder,
  setLimit,
  viewGrid,
  handleToggleView
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
      <ToggleView
        viewGrid={viewGrid}
        handleToggleView={handleToggleView}
      />
    </div>
  )
}

export default NavBar;