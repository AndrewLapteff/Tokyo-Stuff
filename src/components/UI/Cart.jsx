import React, { useCallback, useState } from 'react';
import { useStore } from '../../app/store';
import style from './Cart.module.css';
import OrderButton from './OrderButton';
import Button from './Button';
import CartInfo from './CartInfo';

const Cart = React.memo((props) => {
  const [isOpenModal, setModalStatus] = useState(false);
  const { addId, decrementId, ids } = useStore();

  let [orderCounter, setOrderCounter] = useState(0);

  const orderAddHandler = useCallback(() => {
    setOrderCounter((orderCounter += 1));
    addId(props.id);
  }, [addId, orderCounter, setOrderCounter, props.id]);

  const orderDeleteHandler = useCallback(() => {
    setOrderCounter((orderCounter -= 1));
    decrementId(props.id);
  }, [decrementId, orderCounter, setOrderCounter, props.id]);

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
        <img className={style.image} src={props.image} alt='image-of-food' />
      </div>
      <div className={style.description}>
        <div onClick={modalHandler} className={style.name}>
          {props.name}
        </div>
        <div className={style.grams}>{props.grams}</div>
        <div>{description}</div>
        <div className={style.price}>{props.price} ₴</div>
        {ids[props.id] == undefined ? ( //? там undefined!
          <Button onClick={() => orderAddHandler()}>В КОШИК</Button>
        ) : (
          <OrderButton
            id={props.id}
            orderCounter={orderCounter}
            setOrderCounter={setOrderCounter}
            orderDeleteHandler={orderDeleteHandler}
          />
        )}
      </div>
    </div>
  );
});

export default Cart;
