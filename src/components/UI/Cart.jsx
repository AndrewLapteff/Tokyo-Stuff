import React, { useState } from 'react';
import style from './Cart.module.css';
import OrderButton from './OrderButton';

function Cart(props) {
  const [orderCounter, setOrderCounter] = useState(0);
  let temp = orderCounter;

  const orderHandler = () => {};
  console.log(orderCounter);
  return (
    <div className={style.cart_wrapper}>
      <div className={style.img_wrapper}>
        <img className={style.image} src={props.image} alt='image-of-food' />
      </div>
      <div className={style.description}>
        <div className={style.name}>{props.name}</div>
        <div className={style.grams}>{props.grams}</div>
        <div>{props.description}</div>
        <div className={style.price}>{props.price}</div>
        {orderCounter < 1 ? (
          <button
            onClick={() => setOrderCounter((temp += 1))}
            className={style.buy_button}
          >
            В КОШИК
          </button>
        ) : (
          <OrderButton temp={temp} setOrderCounter={setOrderCounter} />
        )}
      </div>
    </div>
  );
}

export default Cart;
