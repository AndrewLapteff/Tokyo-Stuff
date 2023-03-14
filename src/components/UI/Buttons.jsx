import React, { useState } from 'react';
import { useStore } from '../../app/store';
import OrderButton from './OrderButton';

const Buttons = React.memo((props) => {
  return (
    <React.Fragment>
      <OrderButton
        addHandler={addHandler}
        delHandler={delHandler}
        setCounterStatus={props.setCounterStatus}
        id={props.id}
        count={count}
        idCount={idCount}
      />
    </React.Fragment>
  );
});

export default Buttons;
