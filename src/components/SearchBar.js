const SearchBar = ({ setIsSearching, isSearching, setQuery }) => {
  return (
    <form
      className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right"
    >
      <span uk-search-icon="true" className="uk-icon uk-search-icon"></span>
      <span
        className="uk-search-icon uk-search-icon-flip"
        uk-spinner="ratio: 0.6"
        style={{visibility: isSearching ? '' : 'hidden'}}
      ></span>
      <input
        className="uk-search-input"
        type="search"
        placeholder="Search..."
        onInput={(e) => {
          setIsSearching(true);
          setQuery(e.target.value)
        }}
      />
    </form>
  )
}

export default SearchBar;