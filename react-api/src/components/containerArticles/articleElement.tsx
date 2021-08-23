import React from 'react';
import { ArticleProps } from '../../interface/article';
import './containerArticle.scss';
import * as Constants from '../../constants';

export default function ArticleElement({ articleProps }: ArticleProps): JSX.Element {
  return (
    <a className="link" target="_blank" href={articleProps.url} rel="noreferrer">
      <div className="articleCard">
        <img
          src={
            articleProps.urlToImage ? articleProps.urlToImage : Constants.imagePath.defaultAvatar
          }
          alt="newsImg"
        />
        <div className="textPart">
          <h3>{articleProps.title}</h3>
          <p>{articleProps.description}</p>
          <div className="footerArticle">
            <span className="author">{articleProps.author}</span>
            <span className="publishTime">{articleProps.publishedAt}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
