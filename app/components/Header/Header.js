import React from 'react';
import Nav from './../Nav/Nav';
import {Link} from 'react-router-dom';
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.nav = React.createRef();
    this.state = {
      mobileNavOpen: false
    };

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleMobileNav = this.handleMobileNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  handleClickOutside(event) {
    if (this.nav.current && !this.nav.current.contains(event.target)) {
      if (this.state.mobileNavOpen) {
        this.closeNav();
      }
    }
  };

  handleMobileNav() {
    this.setState(function() {
      return {
        mobileNavOpen: !this.state.mobileNavOpen
      };
    });
  }

  closeNav() {
    this.setState(function() {
      return {
        mobileNavOpen: false
      };
    });
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Link title="Kaveh Akbar" to="/" onClick={this.closeNav}>
                <h1 className="logo">KAVEH<br className="hidden-sm-down" />AKBAR</h1>
              </Link>
            </div>
            <div className="col-md-8">
              <div className="row hidden-md-up">
                <div className="col-md-12">
                  <nav className="mobile-nav" ref={this.nav}>
                    <a onClick={this.handleMobileNav} className="mobile-nav-toggle" title="Expand Menu">MENU</a>
                  </nav>
                </div>
              </div>
              <Nav mobileNavOpen={this.state.mobileNavOpen} linkClick={this.closeNav} />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
