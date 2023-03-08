import BasketIcon from '../UI/BasketIcon';
import style from './Header.module.css';
import React from 'react';
import { useStore } from '../../app/store';

function Header(props) {
  const ids = useStore().ids;

  let cartsCount = 0;
  if (Object.keys(ids).length != 0) {
    cartsCount = Object.values(ids);
    cartsCount = cartsCount.reduce((prev, item) => prev + item, 0);
  }

  return (
    <header className={style.header_wrapper}>
      <a href='#' className={style.logo}>
        Tokyo Stuff
      </a>
      <div className={style.buy_button}>
        <button onClick={props.shoppingCartHandler} className={style.cart_btn}>
          {<BasketIcon />}⠀Корзина⠀
          <span className={style.count_of_items}>⠀{cartsCount}⠀</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
