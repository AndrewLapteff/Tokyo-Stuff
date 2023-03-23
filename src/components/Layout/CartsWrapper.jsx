import React from 'react';
import style from './CartsWrapper.module.css';

const CartsWrapper = React.memo((props) => {
  return (
    <main className={style.main_wrapper}>
      <div className={style.carts_wrapper}>{props.children}</div>
    </main>
    // <div>fd</div>
  );
});

export default CartsWrapper;
