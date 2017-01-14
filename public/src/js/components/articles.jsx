import React from 'react';
import Article from './article.jsx'
import store from '../store';
import { GET_ARTICLES, GET_ARTICLE, getArticles } from '../actions/articles';

class Articles extends React.Component {
    constructor() {
      super();
      this.state = {
        articles: []
      };
    }

    componentWillMount() {
      store.subscribe(() => {
        let articles = store.getState().articles;
        this.setState({articles: articles})
      });
      store.dispatch(getArticles());
    }

    render() {
        return (
          <section className="articles">
            {
              this.state.articles.map((article,ind) => {
                return <Article title={article.title} body={article.body} key={ind} />
              })
            }
          </section>
        )
    }
}
export default Articles;
