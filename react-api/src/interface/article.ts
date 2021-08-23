export interface Article {
  author: string;
  description: string;
  publishedAt: string;
  sorce: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}
export interface ArticleProps {
  articleProps?: Article;
  articles?: Article[];
  totalResults?: number;
}
