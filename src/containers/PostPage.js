import { Link, withRouter } from 'react-router-dom';
import Header from '../components/Header';

const PostPage = ({
  args,
  match: {
    params: { id }
  },
  history
}) => {
  return (
    <main className="uk-main">
      {/* <Header /> */}
    <div className="uk-section">
      <div className="uk-container">
        <h1 className="uk-heading-bullet uk-margin-medium-bottom">
          <span>Post title</span>
          <a className="uk-text-small" href="/">Author</a>
        </h1>
        <div className="uk-article uk-dropcap uk-margin-large-bottom">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga adipisci facere natus quas, corporis assumenda provident perferendis commodi odio ea vel saepe, numquam reiciendis tenetur rerum. Assumenda, quae, eius!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga adipisci facere natus quas, corporis assumenda provident perferendis commodi odio ea vel saepe, numquam reiciendis tenetur rerum. Assumenda, quae, eius!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga adipisci facere natus quas, corporis assumenda provident perferendis commodi odio ea vel saepe, numquam reiciendis tenetur rerum. Assumenda, quae, eius!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga adipisci facere natus quas, corporis assumenda provident perferendis commodi odio ea vel saepe, numquam reiciendis tenetur rerum. Assumenda, quae, eius!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga adipisci facere natus quas, corporis assumenda provident perferendis commodi odio ea vel saepe, numquam reiciendis tenetur rerum. Assumenda, quae, eius!</p>
        </div>
        <hr />
        <h3 className="uk-margin-remove-top">Comments:</h3>
        <div className="uk-comments">
          <article className="uk-comment">
            <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
              <div className="uk-width-expand">
                <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="/">Author</a></h4>
                <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                  <li><a href="/">Email</a></li>
                </ul>
              </div>
            </header>
            <div className="uk-comment-body">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
          </article>
          <hr />
          <article className="uk-comment">
            <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
              <div className="uk-width-expand">
                <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="/">Author</a></h4>
                <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                  <li><a href="/">Email</a></li>
                </ul>
              </div>
            </header>
            <div className="uk-comment-body">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
          </article>
          <hr/>
          <article className="uk-comment">
            <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
              <div className="uk-width-expand">
                <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="/">Author</a></h4>
                <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                  <li><a href="/">Email</a></li>
                </ul>
              </div>
            </header>
            <div className="uk-comment-body">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
          </article>
          <hr/>
          <article className="uk-comment">
            <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
              <div className="uk-width-expand">
                <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="/">Author</a></h4>
                <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                  <li><a href="/">Email</a></li>
                </ul>
              </div>
            </header>
            <div className="uk-comment-body">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
          </article>
        </div>
        <hr />
        <form action="#" className="uk-comment-form uk-margin-medium-top">
            <fieldset className="uk-fieldset">
                <legend className="uk-legend">Add Comment</legend>
                <div className="uk-margin">
                    <input className="uk-input" type="text" placeholder="Name" required />
                </div>
                <div className="uk-margin">
                    <input className="uk-input" type="email" placeholder="Email" required />
                </div>
                <div className="uk-margin">
                    <textarea className="uk-textarea" rows="5" placeholder="Comment" required></textarea>
                </div>
                <div className="uk-margin">
                    <button className="uk-button uk-button-primary" type="submit">Post Comment</button>
                </div>
            </fieldset>
        </form>
      </div>
    </div>
  </main>
  )
}

export default withRouter(PostPage);