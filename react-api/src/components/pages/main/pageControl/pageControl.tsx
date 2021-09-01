import React, { SyntheticEvent, useEffect, useState } from 'react';

import { ControlProps } from '../../../../interface/controlProps';
import './pageControl.scss';

export default function PageControl({
  setCurrentPages,
  btnClick,
  totalPages,
  currentPages,
}: ControlProps): JSX.Element {
  useEffect(() => btnClick(), [currentPages]);

  const changePage = (e: SyntheticEvent<HTMLElement>) => {
    if (e.currentTarget.classList.contains('prevPage')) {
      setCurrentPages((state: number) => state - 1);
    }
    if (e.currentTarget.classList.contains('nextPage')) {
      setCurrentPages((state: number) => state + 1);
    }
  };
  return (
    <div className="pageControl" style={totalPages > 0 ? { display: 'flex' } : { display: 'none' }}>
      <button className="prevPage" disabled={currentPages === 1} onClick={changePage}>
        prev
      </button>
      <span className="textPage">
        {currentPages}/{totalPages}
      </span>
      <button className="nextPage" disabled={currentPages === totalPages} onClick={changePage}>
        next
      </button>
    </div>
  );
}
