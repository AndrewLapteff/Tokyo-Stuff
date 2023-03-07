import BasketIcon from '../UI/BasketIcon';
import Button from '../UI/Button';
import style from './Header.module.css';
import React from 'react';
import { useStore } from '../../app/store';

function Header(props) {
  const itemsCount = useStore().itemsCount;

  return (
    <header className={style.header_wrapper}>
      <a href='#' className={style.logo}>
        Tokyo Stuff
      </a>
      <div className={style.buy_button}>
        <button onClick={props.shoppingCartHandler} className={style.cart_btn}>
          {<BasketIcon />}⠀Корзина⠀
          <span className={style.count_of_items}>⠀{itemsCount}⠀</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
