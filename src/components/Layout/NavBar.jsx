import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={style.nav_wrapper}>
      <NavLink to={'/'}>Головна</NavLink>
      <NavLink to={'/sets'}>Сети</NavLink>
      <NavLink to={'/california'}>Каліфорнія</NavLink>
      <NavLink to={'/philadelphia'}>Філадельфія</NavLink>
    </nav>
  );
}

export default NavBar;
