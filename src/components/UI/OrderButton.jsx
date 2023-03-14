import React, { useState } from 'react';
import { useStore } from '../../app/store';
import style from './OrderButton.module.css';

const OrderButton = React.memo((props) => {
  let [count, setCount] = useState(0);
  const idCount = useStore((state) => state.ids[props.id]);
  const addId = useStore((state) => state.addId);
  const decrementId = useStore((state) => state.decrementId);

  const addHandler = () => {
    addId(props.id);
    setCount((count += 1));
  };

  const delHandler = () => {
    decrementId(props.id);
    if (count > 0) setCount((count -= 1));
  };

  return (
    <div
      style={{ borderColor: `${props.border_color}` }}
      className={style.order_btn_wrapper}
    >
      <button
        onClick={delHandler}
        style={{ color: `${props.color}` }}
        className={style.order_counter_btn}
      >
        -
      </button>
      <div
        style={{ backgroundColor: `${props.bg_color}` }}
        className={style.count_of_items}
      >
        ⠀{idCount}⠀
      </div>
      <button
        onClick={addHandler}
        style={{ color: `${props.color}` }}
        className={style.order_counter_btn}
      >
        +
      </button>
    </div>
  );
});

export default OrderButton;
