import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import * as Constants from '../../constants';

export default function Header(): JSX.Element {
  const linkSelector = (e: React.MouseEvent) => {
    const li = document.querySelectorAll('.navItems li');
    li.forEach((el) => {
      if (el.classList.contains('activeLink')) {
        el.classList.remove('activeLink');
      }
    });
    e.currentTarget.classList.add('activeLink');
  };

  return (
    <header>
      <ul className="navItems">
        <li className="activeLink" onClick={linkSelector}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={linkSelector}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
}
