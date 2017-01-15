import React from 'react';
import { Link } from 'react-router'

class Article extends React.Component {
    render() {
        return (
          <article className="article">
              <h3>{this.props.title}</h3>
              <p>{this.props.body}</p>
              <Link to={`/article/${this.props.id}`}>read more</Link>
          </article>
        )
    }
}

export default Article;
