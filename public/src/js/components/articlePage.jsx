import React from 'react';
import store from '../store';
import {Router, Link} from 'react-router'
import {getArticle} from '../actions/articles';
import articlesController from '../controllers/articlesController'

class ArticlePage extends React.Component {
  constructor() {
    super();
    this.deleteArticle = this.deleteArticle.bind(this);
    this.state = {
      article: {}
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      let article = store.getState().articles;
      this.setState({article: article})
    });
    store.dispatch(getArticle(this.props.routeParams.articleId));
  }
  deleteArticle() {
    /*articlesController.deleteArticle(this.state.article._id)
    .then();
    */
    Router.transitionTo('/');
  }
  render() {
    let button = null;
    if (JSON.parse(sessionStorage.userIsAdmin)) {
      button = <button type="button" onClick={this.deleteArticle}>delete article</button>;
    }
    return (
      <article className="article">
        <h3>{this.state.article.title}</h3>
        <p>{this.state.article.body}</p>
        {button}
      </article>
    )
  }
}

export default ArticlePage;
