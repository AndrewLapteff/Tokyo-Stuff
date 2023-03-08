import { nanoid } from 'nanoid';
import React from 'react';
import { useStore } from '../../app/store';
import Cart from '../UI/Cart';
import About from './About';
import style from './Main.module.css';

function Main() {
  let state = useStore().state;
  const sets = state.map((item) => {
    return (
      <Cart
        image={item.image}
        name={item.name}
        grams={item.grams}
        description={item.description}
        price={item.price}
        key={item.id}
        id={item.id}
      />
    );
  });

  return (
    <main className={style.main_wrapper}>
      <About />
      <div className={style.carts_wrapper}>{sets}</div>
    </main>
  );
}

export default Main;
