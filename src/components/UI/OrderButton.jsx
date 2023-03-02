import React from 'react';
import style from './OrderButton.module.css';

function OrderButton(props) {
  return (
    <div className={style.order_btn_wrapper}>
      <button
        onClick={() => props.setOrderCounter((props.temp -= 1))}
        className={style.order_counter_btn}
      >
        -
      </button>
      <div className={style.count_of_items}>⠀1⠀</div>
      <button
        onClick={() => props.setOrderCounter((props.temp += 1))}
        className={style.order_counter_btn}
      >
        +
      </button>
    </div>
  );
}

export default OrderButton;
