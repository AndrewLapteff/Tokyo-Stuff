import React from 'react';
import { useStore } from '../../../app/store';
import Cart from '../../UI/Cart';
import CartsWrapper from '../CartsWrapper';

function Philadelphia() {
  const state = useStore((s) => s.state);

  let philadelphia = [];
  for (let i = 0; i < state.length; i++) {
    if (state[i].name.match(/Філадельфія/gim))
      philadelphia[i] = (
        <Cart
          image={state[i].image}
          name={state[i].name}
          grams={state[i].grams}
          description={state[i].description}
          price={state[i].price}
          key={state[i].id}
          id={state[i].id}
        />
      );
  }

  return <CartsWrapper>{philadelphia}</CartsWrapper>;
}

export default Philadelphia;
