import { Navigation } from 'components/Navigation/Navigation';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <header className={css.Header}>
        <Navigation />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
