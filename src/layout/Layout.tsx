// src/components/Layout.tsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const Layout: React.FC = () => {
  return (
    <div className="flex grow flex-col [[data-sticky-header=on]_&]:pt-[--tw-header-height-default]">
      <Header />
      <main className="grow" id="content" role="content">
        <div className="container-fluid" id="content_container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
