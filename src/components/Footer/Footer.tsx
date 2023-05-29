import React from 'react';

import { Email } from '../../components';

import * as classes from './footer.module.css';

export const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <footer className={classes.footer}>
            <div className={classes.footerContent}>
              <div className={classes.legal}>
                <div>© 2023 KAVEH AKBAR - ALL RIGHTS RESERVED</div>
              </div>
              <div>
                <Email />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}