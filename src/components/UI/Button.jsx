import React from 'react';
import style from './Button.module.css';

const Button = React.memo((props) => {
  
  return (
    <button
      onClick={props.onClick}
      // style={customStyle}
      href='#'
      className={style.button}
    >
      {props.children}
    </button>
  );
});

export default Button;
