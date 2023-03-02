import BasketIcon from '../UI/BasketIcon';
import Button from '../UI/Button';
import style from './Header.module.css';
import React from 'react';

function Header() {
  return (
    <header className={style.header_wrapper}>
      <a href='#' className={style.logo}>
        Tokyo Stuff
      </a>
      <div className={style.buy_button}>
        <Button>
          {<BasketIcon />}⠀Корзина⠀
          <span className={style.count_of_items}>⠀0⠀</span>
        </Button>
      </div>
    </header>
  );
}

export default Header;
