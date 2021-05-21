import { Link } from "react-router-dom";
import { useBlog } from '../BlogContext';

const Header = () => {
  const { likedPosts, deleteLikedPost } = useBlog();

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
          <button className="uk-button uk-icon" type="button" uk-icon="icon: heart; ratio: 2" aria-expanded="false">
            <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="heart">
              <path fill="none" stroke="#000" strokeWidth="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"></path>
            </svg>
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
                            className="uk-button uk-icon" type="button" uk-icon="icon: close;"
                            onClick={() => deleteLikedPost(post.id)}
                          >
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="close">
                              <path fill="none" stroke="#000" strokeWidth="1.06" d="M16,16 L4,4"></path>
                              <path fill="none" stroke="#000" strokeWidth="1.06" d="M16,4 L4,16"></path>
                            </svg>
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