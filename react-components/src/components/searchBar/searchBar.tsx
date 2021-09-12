import * as React from 'react';
import './searchBar.scss';
import * as Constants from '../../constants';

export function SearchContainer(): JSX.Element {
  return (
    <div className="searchContainer">
      <ButtonSearch />
      <input className="search" type="text" />
    </div>
  );
}
export function ButtonSearch(): JSX.Element {
  return (
    <span className="btnSearch">
      <img src={Constants.iconsPath.search} width="30px" height="30px" />
    </span>
  );
}
