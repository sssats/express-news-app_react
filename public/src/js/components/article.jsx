import React from 'react';

class Article extends React.Component {
    render() {
        return (
          <article className="article">
              <h3><a>{this.props.title}</a></h3>
              <p>{this.props.body}</p>
          </article>
        )
    }
}

export default Article;
