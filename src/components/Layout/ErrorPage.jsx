import React from 'react';
import { useRouteError } from 'react-router-dom';
import Layout from './Layout';
import style from './ErrorPage.module.css';
function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <Layout />
      <main className={style.error_message_wrapper}>
        <p className={style.error_message}>Такої сторінки не існує</p>
        <p className={style.status_text}>{error.statusText}</p>
        <p className={style.status_text}>{error.message}</p>
      </main>
    </div>
  );
}

export default ErrorPage;
