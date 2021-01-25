import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';

function Nav(props) {
  return (
    <nav className={props.mobileNavOpen ? 'nav expanded' : 'nav'}>
      <div className="row">
        <div className="col-md-3">
          <NavLink
            exact
            className="nav-item"
            title="About Kaveh Akbar"
            activeClassName="active"
            to="/about"
            onClick={props.linkClick}
          >
            <h6 className="nav-link">ABOUT</h6>
          </NavLink>
        </div>
        <div className="col-md-3">
          <NavLink
            exact
            className="nav-item"
            title="Books"
            activeClassName="active"
            to="/books"
            onClick={props.linkClick}
          >
            <h6 className="nav-link">BOOKS</h6>
          </NavLink>
        </div>
        <div className="col-md-3">
          <NavLink
            exact
            className="nav-item"
            title="Past and Upcoming Readings"
            activeClassName="active"
            to="/readings"
            onClick={props.linkClick}
          >
            <h6 className="nav-link">READINGS</h6>
          </NavLink>
        </div>
        <div className="col-md-3">
          <NavLink
            exact
            className="nav-item"
            title="Press and Reviews"
            activeClassName="active"
            to="/words"
            onClick={props.linkClick}
          >
            <h6 className="nav-link">WORDS</h6>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
