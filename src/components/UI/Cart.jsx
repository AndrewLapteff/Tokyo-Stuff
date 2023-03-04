import React, { useState } from 'react';
import { useStore } from '../../app/store';
import style from './Cart.module.css';
import OrderButton from './OrderButton';

function Cart(props) {
  const addToCart = useStore().addToCart;

  const [orderCounter, setOrderCounter] = useState(0);
  let temp = orderCounter;

  const orderHandler = () => {
    setOrderCounter((temp += 1));
    addToCart();
  };
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
          <button onClick={() => orderHandler()} className={style.buy_button}>
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
