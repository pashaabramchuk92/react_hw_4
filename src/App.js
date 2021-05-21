import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

import MainPage from "./containers/MainPage";
import PostPage from "./containers/PostPage";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history= {history}>
      <Switch>
        <Route
          path='/'
          exact
          render={() => <MainPage />}
        />
        <Route
          path='/posts/:id'
          component={PostPage}
          
        />
      </Switch>
    </Router>
  )
}

export default App;
