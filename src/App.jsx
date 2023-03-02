import Header from './components/Layout/Header';
import style from './App.module.css';
import Main from './components/Layout/Main';
import React from 'react';

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
