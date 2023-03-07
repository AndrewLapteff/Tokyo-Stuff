import BasketIcon from '../UI/BasketIcon';
import Button from '../UI/Button';
import style from './Header.module.css';
import React from 'react';
import { useStore } from '../../app/store';
<<<<<<< HEAD

function Header(props) {
  const itemsCount = useStore().itemsCount;

=======

function Header() {
  const items = useStore().items;

>>>>>>> 8d2c7b54e91a2da9a78999b2f463ba3cdc6ad0d5
  return (
    <header className={style.header_wrapper}>
      <a href='#' className={style.logo}>
        Tokyo Stuff
      </a>
      <div className={style.buy_button}>
        <button onClick={props.shoppingCartHandler} className={style.cart_btn}>
          {<BasketIcon />}⠀Корзина⠀
<<<<<<< HEAD
          <span className={style.count_of_items}>⠀{itemsCount}⠀</span>
        </button>
=======
          <span className={style.count_of_items}>⠀{items}⠀</span>
        </Button>
>>>>>>> 8d2c7b54e91a2da9a78999b2f463ba3cdc6ad0d5
      </div>
    </header>
  );
}

export default Header;
