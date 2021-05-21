import { Link } from "react-router-dom";
import { useBlog } from "../BlogContext";

const PostsGridView = ({ posts }) => {
  const { isLike, setIsLike, saveLikedPost, deleteLikedPost, color } = useBlog();
  
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {posts.map(post => (
        <div key={post.id}>
          <div className="uk-card uk-card-default uk-margin-medium-bottom">
            <div className="uk-card-header">
              <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
                {`${post.title.slice(0, 10)}...`}
                <a
                  href="/"
                  className="uk-icon-link"
                  uk-icon="heart"
                  style={{'cursor': 'pointer', color: color}}
                  onClick={(e) => {
                    e.preventDefault();
                    saveLikedPost(post.id, post.title);
                    setIsLike(true);

                    if(isLike) {
                      setIsLike(false);
                      deleteLikedPost(post.id);
                    }
                  }}
                > </a>
              </h3>
            </div>
            <div className="uk-card-body">
              <p>{`${post.body.slice(0, 100)}...`}</p>
            </div>
            <div className="uk-card-footer">
              <Link
                to={`/posts/${post.id}`}
                className="uk-button uk-button-text"
              >Read more</Link>
            </div>
          </div>
        </div>
        ))}
    </div>
  );
}

export default PostsGridView;