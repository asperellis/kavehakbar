var React = require('react');
require('./footer.css');

function Footer () {
  return(
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between">
            <div><span className="hidden-md-down">{'COPYRIGHT '}</span>{'© 2017 KAVEH AKBAR - ALL RIGHTS RESERVED'}</div>
            <div>
              <a className="footer-social" href="https://twitter.com/kavehakbar" title="Follow Kaveh On Twitter">{'TWITTER'}</a>
              <a className="footer-social" href="mailto:kavehakbarpoetry@gmail.com" title="Send Kaveh An Email">{'EMAIL'}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

module.exports = Footer;