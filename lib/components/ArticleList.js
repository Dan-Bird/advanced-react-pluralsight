import React from 'react';
import Article from './Article';

const ArticleList = props => {
  const { articles, articleActions } = props;
  return (
    <div>
      {Object.values(articles).map(article => {
        <Article key={article.id} article={article} />;
      })}
    </div>
  );
};

export default ArticleList;
