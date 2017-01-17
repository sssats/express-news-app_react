import React from 'react';
import store from '../store';
import {Router, Link, browserHistory} from 'react-router'
import {getArticle} from '../actions/articles';
import articlesController from '../controllers/articlesController';
import loginController from '../controllers/loginController';

export default class ArticlePage extends React.Component {
  constructor() {
    super();
    this.subscriber;
    this.deleteArticle = this.deleteArticle.bind(this);
    this.state = {
      article: {}
    };
  }

  componentWillMount() {
    this.subscriber = store.subscribe(() => {
      let article = store.getState().articles;
      this.setState({article: article})
    });
    store.dispatch(getArticle(this.props.routeParams.articleId));
  }

  componentWillUnmount() {
    this.subscriber();
  }

  deleteArticle() {
    articlesController.deleteArticle(this.state.article._id).then(json => {
      if (json.success) {
        browserHistory.push('/');
      }
    });
  }

  render() {
    let button = null;
    if (loginController.getUserRole()) {
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
