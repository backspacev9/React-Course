import React, { ChangeEvent, useState } from 'react';
import './search.scss';
import * as Constants from '../../../../constants';
import { ControlProps } from '../../../../interface/controlProps';

function Search({
  setSearchValue,
  setCurrentPages,
  btnClick,
  isLoading,
  sorting,
  setSorting,
}: ControlProps): JSX.Element {
  const [searchVal, setSearchVal] = useState<string>('');

  const submit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentPages(1);
    btnClick();
  };
  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    setSearchVal(value);
  };
  const sortingHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSorting(value);
  };
  return (
    <div className="searchContainer">
      <form className="form" onSubmit={submit}>
        <img
          src={Constants.imagePath.loading}
          style={isLoading ? { opacity: '1' } : { opacity: '0' }}
          alt="loading"
        />
        <input className="searchValue" type="text" value={searchVal} onChange={inputChange} />
        <button type="submit">Search</button>
      </form>
      <div className="sortContainer">
        Sort articles by:
        <label htmlFor="popularity">
          <input
            type="radio"
            value="popularity"
            checked={sorting === 'popularity'}
            name="popularity"
            onChange={sortingHandle}
          />
          Popularity
        </label>
        <label htmlFor="relevancy">
          <input
            type="radio"
            value="relevancy"
            checked={sorting === 'relevancy'}
            name="relevancy"
            onChange={sortingHandle}
          />
          Relevancy
        </label>
        <label htmlFor="publishedAt">
          <input
            type="radio"
            value="publishedAt"
            checked={sorting === 'publishedAt'}
            name="publishedAt"
            onChange={sortingHandle}
          />
          Newest
        </label>
      </div>
    </div>
  );
}

export default Search;
