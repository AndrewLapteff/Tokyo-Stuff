import React from 'react';
import style from './OrderButton.module.css';
import { useStore } from '../../app/store';

const OrderButton = React.memo((props) => {
  const { addId, decrementId, ids } = useStore();

  let count;
  if (ids[props.id]) {
    count = ids[props.id];
  }

  const addItem = () => {
    addId(props.id);
  };

  const deleteItem = () => {
    decrementId(props.id);
  };

  return (
    <div
      style={{ borderColor: `${props.border_color}` }}
      className={style.order_btn_wrapper}
    >
      <button
        style={{ color: `${props.color}` }}
        onClick={() => deleteItem()}
        className={style.order_counter_btn}
      >
        -
      </button>
      <div
        style={{ backgroundColor: `${props.bg_color}` }}
        className={style.count_of_items}
      >
        ⠀{count}⠀
      </div>
      <button
        style={{ color: `${props.color}` }}
        onClick={() => addItem()}
        className={style.order_counter_btn}
      >
        +
      </button>
    </div>
  );
});

export default OrderButton;
