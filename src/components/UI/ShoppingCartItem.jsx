import React, { Fragment } from 'react';
import { useStore } from '../../app/store';
import style from './ShoppingCartItem.module.css';
import OrderButton from './OrderButton';

const ShoppingCartItem = React.memo((props) => {
  const deleteId = useStore((state) => state.deleteId);
  const state = useStore().state;

  let item = state.filter((el) => {
    if (el.id == props.id) {
      return el;
    }
  });

  item = item[0];

  return (
    <Fragment>
      <div className={style.item_wrapper}>
        <button onClick={() => deleteId(props.id)} className={style.item_close}>
          ×
        </button>
        <div className={style.item_bio}>
          <img
            className={style.item_image}
            src={`${props.image}`}
            alt="img"
            width={150}
          />
          <div className={style.item_description}>
            <div className={style.item_name}>{props.name}</div>
            <div className={style.item_grams}>{props.grams}</div>
          </div>
        </div>
        <div className={style.right_info}>
          <OrderButton
            border_color={'rgba(255, 255, 255, 0.600)'}
            bg_color={'rgba(255, 255, 255, 0.850)'}
            color={'rgba(255, 255, 255, 0.950)'}
            id={props.id}
          ></OrderButton>
          <div className={style.item_count_price}>
            <div className={style.count}>{props.count} шт.</div>
            {props.price * props.count} ₴
          </div>
        </div>
      </div>
    </Fragment>
  );
});

export default ShoppingCartItem;
