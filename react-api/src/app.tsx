import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import * as Constants from './constants';
import './style.scss';
import Header from './components/header/header';
import Main from './components/pages/main/main';
import About from './components/pages/about/about';
import PageNotFound from './components/pages/pageNotFound/pageNotFound';
import Details from './components/pages/details/details';
import { Article } from './interface/article';

export default function App(): JSX.Element {
  return (
    <div className="root">
      <Router>
        <Header />
        <Content />
      </Router>
    </div>
  );
}

function Content() {
  const [article, setArticle] = useState<Article[]>([]);
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition timeout={300} classNames="fade" key={location.key}>
        <Switch>
          <Route exact path="/">
            <Main setArticle={setArticle} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/details/:id">
            <Details articles={article} />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
