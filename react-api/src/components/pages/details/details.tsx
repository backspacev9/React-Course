import React, { useEffect, useState } from 'react';

import './details.scss';
import * as Constants from '../../../constants';
import { Article, ArticleProps } from '../../../interface/article';
import ArticleElement from '../main/containerArticles/articleElement';
import { useLocation, useParams } from 'react-router-dom';

export default function Details({ articles }: ArticleProps): JSX.Element {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const card = articles.map((el: Article) => {
    if (el.source.id === id) {
      return <ArticleElement articleProps={el} />;
    }
  });
  return <div className="details">{card}</div>;
}
