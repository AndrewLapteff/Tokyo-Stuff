import React from 'react';
import { useStore } from '../../../app/store';
import Cart from '../../UI/Cart';
import CartsWrapper from '../CartsWrapper';

function CaliforniaPage() {
  const state = useStore((s) => s.state);

  let californias = [];
  for (let i = 0; i < state.length; i++) {
    if (state[i].name.match(/Каліфорнія/gim)) {
      californias[i] = (
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
  }
  return (
    <>
      <CartsWrapper>{californias}</CartsWrapper>;
    </>
  );
}

export default CaliforniaPage;
