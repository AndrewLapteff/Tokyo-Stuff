import { nanoid } from 'nanoid';
import React, { memo, useState } from 'react';
import { useStore } from '../../app/store';
import style from './Cart.module.css';
import OrderButton from './OrderButton';
import Button from './Button';

function Cart(props) {
  const { incrementCartCount, addId, deleteId, ids } = useStore();

  const [orderCounter, setOrderCounter] = useState(0);
  let temp = orderCounter;

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
          <Button
            onClick={() => orderAddHandler()}
            // className={style.buy_button}
          >
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
