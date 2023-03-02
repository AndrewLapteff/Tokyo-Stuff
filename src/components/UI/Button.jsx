import React from 'react';
import style from './Button.module.css';

function Button(props) {
  // let customStyle = {
  //   color: `${props.color}`,
  //   'background-color': `${props.background_color}`,
  //   'border-color': `${props.border_color}`,
  //   'border-radius': `${props.border_radius}`,
  //   'font-size': `${props.font_size}`,
  //   'font-weight': `${props.font_weight}`,
  // };
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
}

export default Button;
