const PostsListView = ({ posts }) => {

  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
      {posts?.map(post => (
        <div key={post.id}>
          <div
            className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin uk-grid"
            uk-grid
          >
            <div className="uk-card-media-left uk-cover-container uk-first-column">
              <img src="https://picsum.photos/600/400" alt="" className="uk-cover" />
              <canvas width="600" height="400"></canvas>
            </div>
            <div className="">
              <div className="uk-card-body">
                  <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
                    {`${post.title.slice(0, 6)}...`} 
                    <span
                      className="uk-icon-link"
                      uk-icon="heart"
                      style={{'cursor': 'pointer'}}
                    />
                  </h3>
                <p>
                  {`${post.body.slice(0, 70)}...`}
                </p>
                <a href="post.html" className="uk-button uk-button-text">Read more</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostsListView;