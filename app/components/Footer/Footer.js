import React from 'react';
import Email from './../Email/Email';
import './footer.css';

function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <footer className="footer">
            <div className="d-flex justify-content-between align-items-center">
              <div className="legal">
                <div>{'© 2017 KAVEH AKBAR - ALL RIGHTS RESERVED'}</div>
                <div className="footer-links">
                  <a
                    className="footer-social"
                    href="https://twitter.com/kavehakbar"
                    title="Follow Kaveh On Twitter"
                  >
                    {'TWITTER'}
                  </a>
                  <a
                    className="footer-social"
                    href="mailto:kaveh@kavehakbar.com"
                    title="Send Kaveh An Email"
                  >
                    {'EMAIL'}
                  </a>
                </div>
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

export default Footer;
