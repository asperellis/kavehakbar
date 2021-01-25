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
                <div>© 2021 KAVEH AKBAR - ALL RIGHTS RESERVED</div>
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
