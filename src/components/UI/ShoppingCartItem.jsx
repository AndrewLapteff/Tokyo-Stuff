import React, { Fragment } from 'react';
import style from './ShoppingCartItem.module.css';

function ShoppingCartItem() {
  return (
    <Fragment>
      <div className={style.item_wrapper}>
        <button className={style.item_close}>×</button>
        <div className={style.item_bio}>
          <img
            className={style.item_image}
            src='https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/23206F91-3101-11ED-8371-B11A020B59BC-1969%D1%851100_0005_%D0%A1%D0%B5%D1%82-%D0%91%D1%96%D0%BD%D0%B3%D0%BE.png?alt=media&token=6a4b6b9c-c74e-45a1-85b4-96608e0c142e&w=800&format=webp&mode=fit&q=59'
            alt='img'
            width={150}
          />
          <div className={style.item_description}>
            <div className={style.item_name}>Сет Токіо</div>
            <div className={style.item_grams}>760 г</div>
          </div>
        </div>
        <div className={style.item_price}>699 ₴</div>
      </div>
    </Fragment>
  );
}

export default ShoppingCartItem;
