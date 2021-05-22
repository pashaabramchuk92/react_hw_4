import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBlog } from "../../BlogContext";

const PostsGridView = ({ post }) => {
  const {
    setContextIsLike,
    saveLikedPost,
    deleteLikedPost,
    getLikedPost,
    contextIsLike
  } = useBlog();

  const [isLike, setIsLike] = useState(contextIsLike);

  useEffect(() => {
    setIsLike(post.title === getLikedPost(post.id));
  }, [isLike, contextIsLike]);

  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom">
        <div className="uk-card-header">
          <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
            {post ? `${post.title.slice(0, 10)}...` : ''}
            <a
              href="/"
              className="uk-icon-link"
              uk-icon="heart"
              style={{'cursor': 'pointer', color: isLike ? 'red' : ''}}
              onClick={(e) => {
                e.preventDefault();
                saveLikedPost(post.id, post.title);
                setIsLike(true);
                setContextIsLike(true);

                if(isLike) {
                  setIsLike(false);
                  setContextIsLike(false);
                  deleteLikedPost(post.id);
                }
              }}
            > </a>
          </h3>
        </div>
        <div className="uk-card-body">
          <p>{post ? `${post.body.slice(0, 100)}...` : ''}</p>
        </div>
        <div className="uk-card-footer">
          <Link
            to={`/posts/${post.id}`}
            className="uk-button uk-button-text"
          >Read more</Link>
        </div>
      </div>
    </div>
  );
}

export default PostsGridView;