<<<<<<< HEAD
import { nanoid } from 'nanoid';
import React, { memo, useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 8d2c7b54e91a2da9a78999b2f463ba3cdc6ad0d5
import { useStore } from '../../app/store';
import style from './Cart.module.css';
import OrderButton from './OrderButton';
import Button from './Button';

function Cart(props) {
<<<<<<< HEAD
  const { incrementCartCount, addId, deleteId, ids } = useStore();
=======
  const addToCart = useStore().addToCart;
>>>>>>> 8d2c7b54e91a2da9a78999b2f463ba3cdc6ad0d5

  const [orderCounter, setOrderCounter] = useState(0);
  let temp = orderCounter;

<<<<<<< HEAD
  const orderAddHandler = () => {
    setOrderCounter((temp += 1));
    incrementCartCount();
    addId(props.id);
    console.log(ids);
  };

  const orderDeleteHandler = () => {
    setOrderCounter((temp -= 1));
    deleteId(props.id);
  };

=======
  const orderHandler = () => {
    setOrderCounter((temp += 1));
    addToCart();
  };
  console.log(orderCounter);
>>>>>>> 8d2c7b54e91a2da9a78999b2f463ba3cdc6ad0d5
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
<<<<<<< HEAD
          <Button
            onClick={() => orderAddHandler()}
            // className={style.buy_button}
          >
=======
          <button onClick={() => orderHandler()} className={style.buy_button}>
>>>>>>> 8d2c7b54e91a2da9a78999b2f463ba3cdc6ad0d5
            В КОШИК
          </Button>
        ) : (
          <OrderButton
            id={props.id}
            temp={temp}
            setOrderCounter={setOrderCounter}
            orderDeleteHandler={orderDeleteHandler}
          />
        )}
      </div>
    </div>
  );
}

export default Cart;
