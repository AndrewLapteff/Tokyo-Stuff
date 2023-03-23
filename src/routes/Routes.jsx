import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import MainPage from '../components/Layout/pages/MainPage';
import ErrorPage from '../components/Layout/ErrorPage';
import SetsPage from '../components/Layout/pages/SetsPage';
import CaliforniaPage from '../components/Layout/pages/CaliforniaPage';
import Philadelphia from '../components/Layout/pages/Philadelphia';
const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <MainPage />,
        index: true, // default
      },
      {
        element: <SetsPage />,
        path: '/sets',
      },
      {
        element: <CaliforniaPage />,
        path: '/california',
      },
      {
        element: <Philadelphia />,
        path: '/philadelphia',
      },
    ],
  },
]);

export default Router;
