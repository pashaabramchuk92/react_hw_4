import { useState } from "react";

const NewComment = ({ url, id, postNewComment }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [commentText, setCommentText] = useState('');

  return (
    <form
      action="#"
      className="uk-comment-form uk-margin-medium-top"
      onSubmit={(e) => {
        e.preventDefault();

        const comment = {
          name: userName,
          email: userEmail,
          body: commentText
        }

        postNewComment(url, id, comment);

        e.target.reset();
      }}
    >
      <fieldset className="uk-fieldset">
          <legend className="uk-legend">Add Comment</legend>
          <div className="uk-margin">
            <input
              className="uk-input"
              type="text"
              placeholder="Name"
              required
              onInput={e => setUserName(e.target.value)}
            />
          </div>
          <div className="uk-margin">
            <input
              className="uk-input"
              type="email"
              placeholder="Email"
              required
              onInput={e => setUserEmail(e.target.value)}
            />
          </div>
          <div className="uk-margin">
            <textarea
              className="uk-textarea"
              rows="5"
              placeholder="Comment"
              required
              onInput={e => setCommentText(e.target.value)}
            ></textarea>
          </div>
          <div className="uk-margin">
            <button className="uk-button uk-button-primary" type="submit">Post Comment</button>
          </div>
      </fieldset>
    </form>
  )
}

export default NewComment;