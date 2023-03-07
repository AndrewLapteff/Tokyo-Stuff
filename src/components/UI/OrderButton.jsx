import React, { useState } from 'react';
import style from './OrderButton.module.css';
import { useStore } from '../../app/store';

const OrderButton = React.memo((props) => {
  let [itemsCount, setItemsCount] = useState(1);
  const { incrementCartCount, decrementCartCount, addId, deleteId, ids } =
    useStore();

  const addItem = () => {
    setItemsCount((itemsCount += 1));
    incrementCartCount();
    addId(props.id);
    console.log(ids);
  };

  const deleteItem = () => {
    if (itemsCount > 1) {
      setItemsCount((itemsCount -= 1));
    } else if ((itemsCount = 1)) {
      props.orderDeleteHandler();
    }
    decrementCartCount();
    deleteId(props.id);
    console.log(ids);
  };

  return (
    <div className={style.order_btn_wrapper}>
      <button onClick={() => deleteItem()} className={style.order_counter_btn}>
        -
      </button>
      <div className={style.count_of_items}>⠀{itemsCount}⠀</div>
      <button onClick={() => addItem()} className={style.order_counter_btn}>
        +
      </button>
    </div>
  );
});

export default OrderButton;
