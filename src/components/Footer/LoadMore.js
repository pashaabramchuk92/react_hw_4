const LoadMore = ({ handleLoadMore, isLoading, setIsLoding }) => {
  return (
    <div className="uk-margin">
      <button
        className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
        onClick={() => {
          setIsLoding(true);
          handleLoadMore();
        }}
      >Load more
        <div
          className="uk-margin-small-left"
          uk-spinner="ratio: 0.6"
          style={{visibility: isLoading ? '' : 'hidden'}}
        ></div>
      </button>
    </div>
  )
}

export default LoadMore;