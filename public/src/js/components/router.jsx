import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import App from './app.jsx';
import Articles from './articles.jsx';
import ArticlePage from './articlePage.jsx';
import Login from './login.jsx';
import Header from './header.jsx'

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Header/>
        <Route path="/" component={App}>
          <IndexRoute component={Articles} />
          <Route path="/article/:articleId" component={ArticlePage}/>
          <Route path="/login" component={Login}/>
        </Route>
      </Router>
    )
  }
}
export default AppRouter;
