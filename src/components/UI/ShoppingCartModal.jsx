import React, { useState } from 'react';
import Button from './Button';
import style from './ShoppingCartModal.module.css';
import ReactDOM from 'react-dom';
import ShoppingCartItem from './ShoppingCartItem';
import { useStore } from '../../app/store';

function ShoppingCartModal(props) {
  const [closeAnim, setCloseAnim] = useState('');
  let { ids, state } = useStore();
  let idsCopy = Object.assign(ids);
  idsCopy = Object.entries(idsCopy);

  //? прохожу по массиву продуктів
  const shoppingCartStore = state.filter((item) => {
    let result1;
    //? прохожу по массиву id
    idsCopy.filter((id) => {
      //? поріняння id в корзині та серед всих продуктів
      if (id[0] == item.id) {
        item.count = id[1]; //? присвоєння кількості
        result1 = item;
      }
    });
    return result1;
  });
  let wholePrice = 0;
  const shoppingCartItems = shoppingCartStore.map((item) => {
    wholePrice += item.price * item.count;
    return (
      <ShoppingCartItem
        image={item.image}
        grams={item.grams}
        name={item.name}
        description={item.description}
        price={item.price}
        count={item.count}
        id={item.id}
        key={item.id}
      />
    );
  });

  return ReactDOM.createPortal(
    <div
      className={style.modal_background}
      onClick={(e) => {
        if (e.target.className == `${style.modal_background}`) {
          // setCloseAnim('scale-down 0.2s');
          // setTimeout(() => props.shoppingCartHandler(), 200);
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
        <div className={style.modal_content}>{shoppingCartItems}</div>
        <div className={style.modal_buttons}>
          <div className={style.wholePrice}>{wholePrice} ₴</div>
          <Button>Купити</Button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default ShoppingCartModal;
