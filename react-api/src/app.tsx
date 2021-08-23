import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import axiosInstance from './api';
import ContainerArticle from './components/containerArticles/containerArticles';
import PageControl from './components/pageControl/pageControl';
import Search from './components/search/search';
import { Article, ArticleProps } from './interface/article';
import * as Constants from './constants';
import './style.scss';

export default function App(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>('news');
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPages, setCurrentPages] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoding, setIsLoading] = useState(false);
  const [sorting, setSorting] = useState('popularity');
  const queryForEverything = Constants.createQuery([
    { key: 'q', value: searchValue },
    { key: 'sortBy', value: sorting },
    { key: 'page', value: currentPages },
    { key: 'pageSize', value: Constants.maxResult },
    { key: 'apiKey', value: Constants.APIKEY },
  ]);
  async function search() {
    if (searchValue) {
      setIsLoading(true);
      try {
        const response: AxiosResponse<ArticleProps> = await axiosInstance.get(
          `v2/everything${queryForEverything}`
        );
        // console.log(response.data.articles);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        setArticles(() => response.data.articles);
        setTotalPages(() => Math.ceil(response.data.totalResults / Constants.maxResult));
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  }

  function click() {
    // console.log(page);
    search();
    console.log('currPage: ', currentPages);
  }

  return (
    <div className="root">
      <Search
        setSearchValue={setSearchValue}
        setCurrentPages={setCurrentPages}
        btnClick={search}
        isLoading={isLoding}
        sorting={sorting}
        setSorting={setSorting}
      />
      <ContainerArticle articles={articles} />
      <PageControl
        setCurrentPages={setCurrentPages}
        btnClick={click}
        totalPages={totalPages}
        currentPages={currentPages}
      />
    </div>
  );
}
