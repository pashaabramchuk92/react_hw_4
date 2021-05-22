import { withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getPageData, getPostComments, postNewComment } from "../api/api";
import Header from '../components/Header';
import { BlogProvider } from '../BlogContext';
import Comments from '../components/PostPage/Comments';
import NewComment from '../components/PostPage/NewComment';

const PostPage = ({
  match: {
    params: { id }
  }
}) => {
  const [currentPage, setCurrentPage] = useState({});
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPageData(id);
      setCurrentPage(data);
    }

    fetchPost();
  }, [id]);

  useEffect(() => {
    const fetchComments = async () => {
      const data = await getPostComments(id);
      setComments(data.comments);
    }

    fetchComments();
  }, [id]);

  return (
    <BlogProvider>
      <main className="uk-main">
        <Header />
        <div className="uk-section">
          <div className="uk-container">
            <h1 className="uk-heading-bullet uk-margin-medium-bottom">
              <span>{currentPage.title}</span>
              <a className="uk-text-small" href="/">{` Author-${currentPage.userId}`}</a>
            </h1>
            <div className="uk-article uk-dropcap uk-margin-large-bottom">
              <p>{currentPage.body}</p>
            </div>
            <hr />
            <h3 className="uk-margin-remove-top">Comments:</h3>
            <Comments comments={comments} />
            <NewComment
              id={id}
              postNewComment={postNewComment}
            />
          </div>
        </div>
      </main>
    </BlogProvider>
  )
}

export default withRouter(PostPage);