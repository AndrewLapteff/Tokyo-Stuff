import React, { Fragment } from 'react';
import { useStore } from '../../app/store';

function CartsCount() {
  const ids = useStore().ids;

  let cartsCount = 0;
  if (Object.keys(ids).length != 0) {
    cartsCount = Object.values(ids);
    cartsCount = cartsCount.reduce((prev, item) => prev + item, 0);
  }

  return <Fragment>{cartsCount}</Fragment>;
}

export default CartsCount;
