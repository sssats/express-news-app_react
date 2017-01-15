import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import App from './app.jsx';
import ArticlePage from './articlePage.jsx';

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/article/:articleId" component={ArticlePage}/>
      </Router>
    )
  }
}
export default AppRouter;
