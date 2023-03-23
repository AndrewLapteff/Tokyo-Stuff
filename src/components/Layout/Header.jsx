import BasketIcon from '../UI/BasketIcon';
import style from './Header.module.css';
import React, { useState } from 'react';
import CartsCount from '../UI/CartsCount';
import ShoppingCartModal from '../UI/ShoppingCartModal';

const Header = React.memo(() => {
  const [isShoppingCartOpen, setShoppingCartStatus] = useState(false);

  const shoppingCartHandler = () => {
    setShoppingCartStatus(!isShoppingCartOpen);
    if (!isShoppingCartOpen) {
      document.body.style.overflow = 'hidden';
    }
    if (isShoppingCartOpen) {
      document.body.style.overflow = 'overlay';
    }
  };
  return (
    <header className={style.header_wrapper}>
      {isShoppingCartOpen && (
        <ShoppingCartModal shoppingCartHandler={shoppingCartHandler} />
      )}
      <a href="#" className={style.logo}>
        Tokyo Stuff
      </a>
      <div onClick={shoppingCartHandler} className={style.buy_button}>
        <button className={style.cart_btn}>
          {<BasketIcon />}⠀Корзина⠀
          <span className={style.count_of_items}>
            ⠀<CartsCount />⠀
          </span>
        </button>
      </div>
    </header>
  );
});

export default Header;
