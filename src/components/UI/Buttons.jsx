import React from 'react';
import { useStore } from '../../app/store';
import Button from './Button';
import OrderButton from './OrderButton';

const Buttons = React.memo((props) => {
  const id = useStore((state) => state.ids[props.id]);
  const addId = useStore((state) => state.addId);

  const addHandler = () => {
    addId(props.id);
  };

  return (
    <React.Fragment>
      {id == undefined ? (
        <Button onClick={() => addHandler()}>В КОШИК</Button>
      ) : (
        <OrderButton id={props.id} />
      )}
    </React.Fragment>
  );
});

export default Buttons;
