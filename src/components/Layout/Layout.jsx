import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';

function Layout() {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
