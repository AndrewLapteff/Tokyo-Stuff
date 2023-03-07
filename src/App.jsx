import Header from './components/Layout/Header';
import style from './App.module.css';
import Main from './components/Layout/Main';
import React, { useState } from 'react';
import ShoppingCartModal from './components/UI/ShoppingCartModal';

function App() {
  const [isShoppingCartOpen, setShoppingCartStatus] = useState(false);

  const shoppingCartHandler = () => {
    setShoppingCartStatus(!isShoppingCartOpen);
    if (!isShoppingCartOpen) {
      document.body.style.overflow = 'hidden';
    }
    if (isShoppingCartOpen) {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className={style.App}>
      {isShoppingCartOpen && (
        <ShoppingCartModal shoppingCartHandler={shoppingCartHandler} />
      )}
      <Header shoppingCartHandler={shoppingCartHandler} />
      <Main />
    </div>
  );
}

export default App;
