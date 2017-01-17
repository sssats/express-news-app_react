import React from 'react';
import Article from './article.jsx'
import store from '../store';
import { getArticles } from '../actions/articles';

export default class Articles extends React.Component {
    constructor() {
      super();
      this.subscriber;
      this.state = {
        articles: []
      };
    }

    componentWillMount() {
      this.subscriber = store.subscribe(() => {
        let articles = store.getState().articles;
        this.setState({articles: articles})
      });
      store.dispatch(getArticles());
    }

    componentWillUnmount() {
      this.subscriber();
    }

    render() {
        return (
          <section className="articles">
            {
              this.state.articles.map((article,ind) => {
                  return <Article title={article.title} body={article.body} id={article._id} key={article._id} />
              })
            }
          </section>
        )
    }
}
