import style from './App.module.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Router from './routes/Routes';

const App = () => {
  document.body.style.overflow = 'overlay';
  return (
    <div className={style.App}>
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;
