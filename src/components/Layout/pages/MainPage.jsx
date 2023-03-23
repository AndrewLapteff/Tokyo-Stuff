import React from 'react';
import { useStore } from '../../../app/store';
import Cart from '../../UI/Cart';
import CartsWrapper from '../CartsWrapper';
import About from '.././About';

const MainPage = React.memo(() => {
  const state = useStore((store) => store.state);

  const products = state.map((item) => {
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
    <>
      <CartsWrapper>
        <About />
        {products}
      </CartsWrapper>
    </>
  );
});

export default MainPage;
