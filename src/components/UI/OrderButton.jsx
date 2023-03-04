import React, { useState } from 'react';
import style from './OrderButton.module.css';
import { useStore } from '../../app/store';

function OrderButton(props) {
  let [itemsCount, setItemsCount] = useState(1);
  const addToCart = useStore().addToCart;
  const delFromCart = useStore().delFromCart;

  const addItem = () => {
    setItemsCount((itemsCount += 1));
    addToCart();
  };
  const deleteItem = () => {
    if (itemsCount >= 1) {
      setItemsCount((itemsCount -= 1));
      delFromCart();
    }
  };

  return (
    <div className={style.order_btn_wrapper}>
      <button
        /*onClick={() => decrement(1)}*/ className={style.order_counter_btn}
        onClick={() => deleteItem()}
      >
        -
      </button>
      <div className={style.count_of_items}>⠀{itemsCount}⠀</div>
      <button
        /*onClick={() => increment(1)}*/
        onClick={() => addItem()}
        className={style.order_counter_btn}
      >
        +
      </button>
    </div>
  );
}

export default OrderButton;
