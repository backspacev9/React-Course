import * as React from 'react';
import CardsField from './components/cards/cardsField';
import { SearchContainer } from './components/searchBar/searchBar';
import './style.scss';

export default function App(): JSX.Element {
  return (
    <div className="root">
      <SearchContainer />
      <CardsField />
    </div>
  );
}
