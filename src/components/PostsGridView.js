const PostsGridView = ({ posts }) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {posts?.map(post => (
        <div key={post.id}>
          <div className="uk-card uk-card-default uk-margin-medium-bottom">
              <div className="uk-card-header">
                  <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
                    {`${post.title.slice(0, 10)}...`}
                    <span
                      className="uk-icon-link"
                      uk-icon="heart"
                      style={{'cursor': 'pointer'}}
                    />
                  </h3>
              </div>
              <div className="uk-card-body">
                  <p>{`${post.body.slice(0, 100)}...`}</p>
              </div>
              <div className="uk-card-footer">
                  <a href="/" className="uk-button uk-button-text">Read more</a>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostsGridView;