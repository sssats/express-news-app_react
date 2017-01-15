import React from 'react';
import { Link } from 'react-router'
import store from '../store';
import { getArticle } from '../actions/articles';

class ArticlePage extends React.Component {
    constructor() {
      super();
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
    render() {
        return (
          <article className="article">
            <h3>{this.state.article.title}</h3>
            <p>{this.state.article.body}</p>
          </article>
        )
    }
}

export default ArticlePage;
