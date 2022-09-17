import React from 'react';
import { Outlet } from "react-router-dom";

import { Footer, Header } from '../components';

import * as classes from './layout.module.css'

export const Layout = () => {
  return (
    <div className={classes.app}>
      <Header />
      <main role="main" className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}