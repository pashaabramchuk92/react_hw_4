import { Link } from "react-router-dom";
import { useBlog } from '../BlogContext';

const Header = () => {
  const { likedPosts, deleteLikedPost, setContextIsLike, contextIsLike } = useBlog();

  return (
    <nav className="uk-navbar uk-navbar-container">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <Link to='/'>Posts</Link>
          </li>
          <li>
            <a href="/" onClick={e => e.preventDefault()}>Albums</a>
          </li>
        </ul>
      </div>
      <div className="uk-navbar-right">
        <div className="uk-navbar-item">
          <button
            className="uk-button uk-icon"
            type="button"
            uk-icon="icon: heart; ratio: 2"
            aria-expanded="false"
          >
          </button>
          <div className="uk-width-large uk-dropdown" uk-dropdown="mode: click">
            <div className="uk-dropdown-grid uk-child-width-1-1@m uk-grid" uk-grid="">
              <div>
                <table className="uk-table uk-table-divider uk-table-justify">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th className="uk-text-right">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {likedPosts.map(post => (
                      <tr key={post.id}>
                        <td>{post.title}</td>
                        <td className="uk-text-right">
                          <button
                            className="uk-button uk-icon"
                            type="button"
                            uk-icon="icon: close;"
                            onClick={() => {
                              deleteLikedPost(post.id);
                              setContextIsLike(!contextIsLike);
                              console.log(contextIsLike);
                            }}
                          >
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;