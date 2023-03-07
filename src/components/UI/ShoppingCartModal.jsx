import React from 'react';
import Button from './Button';
import style from './ShoppingCartModal.module.css';
import ReactDOM from 'react-dom';
import ShoppingCartItem from './ShoppingCartItem';

function ShoppingCartModal(props) {
  return ReactDOM.createPortal(
    <div
      className={style.modal_background}
      onClick={(e) => {
        if (e.target.className == `${style.modal_background}`) {
          props.shoppingCartHandler();
        }
      }}
    >
      <div className={style.modal_wrapper}>
        <button
          className={style.modal_close_btn}
          onClick={props.shoppingCartHandler}
        >
          ×
        </button>
        <h2>Корзина</h2>
        <div className={style.modal_content}>
          <ShoppingCartItem />
        </div>
        <div className={style.modal_buttons}>
          <Button>Купити</Button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default ShoppingCartModal;
