import React from 'react';
import { Article, ArticleProps } from '../../interface/article';
import ArticleElement from './articleElement';

export default function ContainerArticle({ articles }: ArticleProps): JSX.Element {
  const cards = articles.map((el: Article) => <ArticleElement articleProps={el} />);
  return (
    <div className="newsContainer">
      {cards.length > 0 ? cards : <span className="noResult">sorry, but your query not found</span>}
    </div>
  );
}
