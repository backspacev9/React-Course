import * as React from 'react';
import './cards.scss';
import Card from './card';
import * as Constants from '../../constants';
import { MusicCard } from '../../Interfaces/musicCard';

export default function CardsField(): JSX.Element {
  const cards = Constants.cardsArray.map((el) => <Card {...el} />);

  return <div className="cardsField">{cards}</div>;
}
