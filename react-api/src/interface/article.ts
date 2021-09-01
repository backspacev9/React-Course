import { Dispatch, SetStateAction } from 'react';

export interface Article {
  author: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}
export interface ArticleProps {
  articleProps?: Article;
  articles?: Article[];
  totalResults?: number;
  setArticle?: Dispatch<SetStateAction<Article[]>>;
}
