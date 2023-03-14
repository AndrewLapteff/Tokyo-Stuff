import React from 'react';
import style from './CartInfo.module.css';
import ReactDOM from 'react-dom';
import ReactImageMagnify from 'react-image-magnify';

const CartInfo = React.memo((props) => {
  const url = props.image;
  return ReactDOM.createPortal(
    <div
      onClick={(e) => {
        if (e.target.className == style.modal_background) {
          props.modalHandler();
        }
      }}
      className={style.modal_background}
    >
      <div className={style.modal_content}>
        <div className={style.image}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Example image',
                isFluidWidth: true,
                src: url,
              },
              largeImage: {
                src: url,
                width: 1200,
                height: 670.5,
              },
              isHintEnabled: true,
              hintTextMouse: 'Наведіть щоб збільшити',
              hoverDelayInMs: 40,
              hoverOffDelayInMs: 40,
              fadeDurationInMs: 150,
              enlargedImagePosition: 'over',
            }}
          />
        </div>
        <div className={style.item_bio}>
          <div className={style.item_title}>{props.name}</div>
          <div className={style.item_description}>{props.description}</div>
          <div className={style.item_description}>{props.grams}</div>
          <div className={style.item_price}>{props.price} ₴</div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
});

export default CartInfo;
