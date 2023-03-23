import React, { useState } from 'react';
import style from './Cart.module.css';
import CartInfo from './CartInfo';
import Buttons from './Buttons';

const Cart = React.memo((props) => {
  const [isOpenModal, setModalStatus] = useState(false);

  const modalHandler = () => {
    setModalStatus(!isOpenModal);
  };

  let description = props.description;

  if (props.description.length > 80) {
    description = props.description.slice(0, 80) + '...';
  }
  return (
    <div className={style.cart_wrapper}>
      {isOpenModal && (
        <CartInfo
          modalHandler={modalHandler}
          image={props.image}
          name={props.name}
          grams={props.grams}
          price={props.price}
          description={props.description}
        />
      )}
      <div onClick={modalHandler} className={style.img_wrapper}>
        <img
          loading="lazy"
          className={style.image}
          src={props.image}
          alt="image-of-food"
        />
      </div>
      <div className={style.description}>
        <div onClick={modalHandler} className={style.name}>
          {props.name}
        </div>
        <div className={style.grams}>{props.grams}</div>
        <div>{description}</div>
        <div className={style.price}>{props.price} ₴</div>
      </div>
      <div style={{ marginBottom: '5px' }}>
        <Buttons className={style.buttons} id={props.id} />
      </div>
    </div>
  );
});

export default Cart;
